'use client';

import { FormField, FormItem, FormControl, Form, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'react-toastify';
import { GalleryDocumentPopulated } from '@/server/models/gallery.model';
import { galleryTypeMap, GalleryTypeKey, galleryItemSizeMap, GalleryItemSizeKey } from '@/constants/admin';
import { IAddUpdateFormProps } from '@/types/dashboard';
import { Switch } from '@/components/ui/switch';
import { useUpdateGalleryItem, useCreateGalleryItem } from '@/hooks/gallery.hooks';
import { useEffect } from 'react';
import { MultiSelectWithSearch } from '@/components/dashboard/admin/forms';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useGalleryTags } from '@/hooks/gallery-tags.hooks';
import { Skeleton } from '@/components/ui/skeleton';

const youtubeUrlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
const instagramUrlRegex = /^(https?:\/\/)?(www\.)?(instagram\.com|insta\.?gram)\/.+$/;

const galleryFormSchema = z
  .object({
    title: z.string().min(3, { message: 'Please enter the gallery item title (at least 3 characters).' }),
    category: z.string().min(1, { message: 'Please select a gallery category.' }),
    type: z.enum(Object.keys(galleryTypeMap) as [GalleryTypeKey, ...GalleryTypeKey[]]),
    content: z.union([
      z.string().url({ message: 'Please enter a valid URL.' }),
      z.instanceof(File, { message: 'Please upload an image or video file.' }),
      z.string().min(1, { message: 'Content is required.' }),
    ]),
    thumbnailUrl: z.any().optional(),
    isPublished: z.boolean(),
    tags: z.array(z.string()).optional(),
    itemSize: z.enum(Object.keys(galleryItemSizeMap) as [GalleryItemSizeKey, ...GalleryItemSizeKey[]]),
  })
  .refine(
    (data) => {
      if (data.type === galleryTypeMap.youtube.key) {
        return youtubeUrlRegex.test(data.content as string);
      } else if (data.type === galleryTypeMap.instagram.key) {
        return instagramUrlRegex.test(data.content as string);
      }
      return true;
    },
    {
      message: 'Please enter a valid YouTube/Instagram URL.',
      path: ['content'],
    }
  );

type GalleryFormProps = IAddUpdateFormProps<GalleryDocumentPopulated> & { galleryCategoryId: string; data?: GalleryDocumentPopulated };

const GalleryForm: React.FC<GalleryFormProps> = ({ data, galleryCategoryId }) => {
  const updateGalleryItemMutation = useUpdateGalleryItem();
  const createGalleryItemMutation = useCreateGalleryItem();
  const { data: galleryTags, isLoading: tagsLoading } = useGalleryTags();

  const tags = galleryTags?.tags || [];

  const galleryItemId = data?._id;

  const form = useForm<z.infer<typeof galleryFormSchema>>({
    resolver: zodResolver(galleryFormSchema),
    defaultValues: {
      title: data?.title || '',
      type: data?.type || (galleryTypeMap.image.key as GalleryTypeKey),
      content: data?.content || '',
      thumbnailUrl: data?.thumbnailUrl || '',
      isPublished: data?.isPublished || true,
      category: galleryCategoryId,
      tags: data?.tags?.map((tag) => tag._id) || [],
      itemSize: data?.itemSize || (galleryItemSizeMap.vertical.key as GalleryItemSizeKey),
    },
  });

  useEffect(() => {
    const subscription = form.watch((value, { name, type }) => {
      if (name === 'type') {
        form.setValue('content', '');
        form.setValue('thumbnailUrl', '');
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);

  async function onSubmit(values: z.infer<typeof galleryFormSchema>) {
    try {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('type', values.type);
      formData.append('isPublished', String(values.isPublished));
      formData.append('category', values.category);
      formData.append('tags', values.tags?.join(',') || '');
      formData.append('itemSize', values.itemSize);

      if (values.type === galleryTypeMap.youtube.key || values.type === galleryTypeMap.instagram.key) {
        formData.append('content', values.content as string);
      } else if (values.content instanceof File) {
        formData.append('content', values.content);
      } else {
        formData.append('content', values.content as string);
      }

      if (values.thumbnailUrl instanceof File) {
        formData.append('thumbnailUrl', values.thumbnailUrl);
      } else if (typeof values.thumbnailUrl === 'string') {
        formData.append('thumbnailUrl', values.thumbnailUrl);
      }

      let result;

      if (galleryItemId) {
        // @ts-ignore
        result = await updateGalleryItemMutation.mutateAsync({ id: galleryItemId, data: formData });
      } else {
        result = await createGalleryItemMutation.mutateAsync(formData);
      }

      if (result.success) {
        toast.success(result.message);

        if (!galleryItemId) {
          form.reset();
        }
      } else {
        throw new Error(result.message || 'An error occurred');
      }
    } catch (error: any) {
      toast.error(error.message || 'An error occurred');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='primary-label'>
                  <span>Title</span>
                  <span className='text-primaryColor'>*</span>
                </FormLabel>
                <FormControl>
                  <Input className='primary-input-md' placeholder='Enter gallery item title' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Tags */}
          <FormField
            control={form.control}
            name='tags'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='primary-label'>
                  <span>Tags</span>
                </FormLabel>
                {tagsLoading ? (
                  <div className='flex items-center justify-center h-12'>
                    <Skeleton className='size-full' />
                  </div>
                ) : (
                  <FormControl>
                    <MultiSelectWithSearch
                      options={tags?.map((tag) => ({ label: tag.name, value: tag._id })) || []}
                      selectedOptions={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                )}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* galleryItemSize */}
          <FormField
            control={form.control}
            name='itemSize'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='primary-label'>
                  <span>Size</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger key={field.value} className='primary-select-md'>
                      <SelectValue placeholder='Select size' />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(galleryItemSizeMap).map(([key, size]) => (
                        <SelectItem key={key} value={size.key}>
                          {size.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='type'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gallery Type</FormLabel>
              <FormControl>
                <Tabs defaultValue={field.value} onValueChange={(value) => field.onChange(value as GalleryTypeKey)}>
                  <TabsList className='grid w-full lg:grid-cols-4 bg-primaryColor-100 h-12 gap-2'>
                    {Object.entries(galleryTypeMap).map(([key, type]) => (
                      <TabsTrigger
                        key={key}
                        className='data-[state=active]:bg-white h-10 data-[state=active]:shadow-none bg-white/40 capitalize'
                        value={type.key}
                      >
                        {type.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  <TabsContent value={galleryTypeMap.youtube.key}>
                    <FormField
                      control={form.control}
                      name='content'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>YouTube</FormLabel>
                          <FormControl>
                            {/* @ts-ignore */}
                            <Input className='primary-input-md' placeholder='Enter YouTube URL' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TabsContent>

                  <TabsContent value={galleryTypeMap.instagram.key}>
                    <FormField
                      control={form.control}
                      name='content'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Instagram</FormLabel>
                          <FormControl>
                            {/* @ts-ignore */}
                            <Input className='primary-input-md' placeholder='Enter Instagram URL' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TabsContent>
                </Tabs>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='isPublished'
          render={({ field }) => (
            <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
              <div className='space-y-0.5'>
                <FormLabel className='text-base'>Publish</FormLabel>
                <FormDescription>
                  {field.value ? 'This gallery item will be visible to the public.' : 'This gallery item will be hidden from the public.'}
                </FormDescription>
              </div>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />

        <button type='submit' disabled={form.formState.isSubmitting} className='btn-default__outline !rounded-lg !py-3 justify-center'>
          {form.formState.isSubmitting ? (
            <>
              <Loader2 size={20} className='animate-spin mr-3' />
              <span>{galleryItemId ? 'Updating...' : 'Creating...'}</span>
            </>
          ) : (
            <span>{galleryItemId ? 'Update Gallery Item' : 'Create Gallery Item'}</span>
          )}
        </button>
      </form>
    </Form>
  );
};

export default GalleryForm;
