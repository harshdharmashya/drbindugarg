'use client';

import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { galleryTypeMap } from '@/constants/admin';
import { extractInstagramVideoId, extractYouTubeVideoId } from '@/lib/utils';
import { ImageWithPrefix } from '@/components/misc';
import { useGalleryCategories } from '@/hooks/gallery-category.hooks';
import { GalleryDocument } from '@/server/models/gallery.model';
import { MdLandscape, MdPortrait } from 'react-icons/md';
import { Skeleton } from '@/components/ui/skeleton';
import { UPLOAD_BASE_URL } from '@/constants/admin';
interface Category {
  _id: string;
  name: string;
  galleries: GalleryDocument[];
}

export default function DynamicGallery() {
  const {
    data: galleryCategories,
    isLoading: galleryCategoriesLoading,
    error: galleryCategoriesError,
  } = useGalleryCategories({ includeGalleries: true, limit: Number.MAX_SAFE_INTEGER });

  const categories = (galleryCategories?.categories || []) as Category[];
  const [activeCategory, setActiveCategory] = useState<string>('');

  useEffect(() => {
    if (categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0].name);
    }
  }, [categories, activeCategory]);

  if (galleryCategoriesError) return <p>{galleryCategoriesError.message}</p>;

  if (galleryCategoriesLoading) {
    return (
      <section className='relative overflow-hidden'>
        <div className='max-container padding-container-sm flex flex-col items-center justify-center gap-4'>
          <div className='text-center space-y-1 max-w-2xl'>
            <Skeleton className='h-6 w-32' />
            <Skeleton className='h-8 w-48' />
          </div>
          <div className='w-full'>
            <Skeleton className='h-10 w-full' />
            <div className='mt-4'>
              <Skeleton className='h-10 w-full' />
              <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                <Skeleton className='h-96 w-full' />
                <Skeleton className='h-96 w-full' />
                <Skeleton className='h-96 w-full' />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentCategory = categories.find((cat) => cat.name === activeCategory);
  const galleries = currentCategory?.galleries.filter((item) => item.isPublished) || [];

  const squareItems = galleries.filter((item) => !item.itemSize || item.itemSize === 'square');
  const verticalItems = galleries.filter((item) => item.itemSize === 'vertical');

  return (
    <section className='relative overflow-hidden'>
      <div className='max-container padding-container-sm flex flex-col items-center justify-center gap-4'>
        <div className='text-center space-y-1 max-w-2xl'>
          <p className='section-subtitle'>Gallery</p>
          <h1 className='section-title'>Our Latest Moments</h1>
        </div>
        <div className='w-full'>
          <Tabs defaultValue={categories[0]?.name} value={activeCategory} onValueChange={setActiveCategory} className='w-full space-y-3'>
            <TabsList className='w-full flex h-full flex-wrap justify-center gap-2 items-center bg-transparent'>
              {categories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  className='rounded-md capitalize text-base border text-primaryColor border-primaryColor data-[state=active]:bg-primaryColor data-[state=active]:text-white data-[state=active]:border-primaryColor'
                  value={category.name}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory} className='mt-4'>
              <Tabs defaultValue='square' className='w-full'>
                <TabsList className='w-full flex h-full flex-wrap justify-center gap-2 items-center bg-transparent mb-4'>
                  {squareItems.length > 0 && (
                    <TabsTrigger
                      value='square'
                      className='rounded-md capitalize text-base border text-secondaryColor border-secondaryColor data-[state=active]:bg-secondaryColor data-[state=active]:text-white data-[state=active]:border-secondaryColor'
                    >
                      <span className='flex items-center'>
                        <MdLandscape className='mr-2' size={16} />
                        Landscape
                      </span>
                    </TabsTrigger>
                  )}
                  {verticalItems.length > 0 && (
                    <TabsTrigger
                      value='vertical'
                      className='rounded-md capitalize text-base border text-secondaryColor border-secondaryColor data-[state=active]:bg-secondaryColor data-[state=active]:text-white data-[state=active]:border-secondaryColor'
                    >
                      <span className='flex items-center'>
                        <MdPortrait className='mr-2' size={16} />
                        Portrait
                      </span>
                    </TabsTrigger>
                  )}
                </TabsList>

                {squareItems.length > 0 && (
                  <TabsContent value='square'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                      {squareItems.map((item) => (
                        <GalleryItem key={item._id} item={item} />
                      ))}
                    </div>
                  </TabsContent>
                )}

                {verticalItems.length > 0 && (
                  <TabsContent value='vertical'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                      {verticalItems.map((item) => (
                        <GalleryItem key={item._id} item={item} />
                      ))}
                    </div>
                  </TabsContent>
                )}
              </Tabs>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

const GalleryItem = ({ item }: { item: GalleryDocument }) => {
  return (
    <div
      className={`${
        item.itemSize === 'vertical' ? 'h-[500px]' : 'h-[350px] lg:h-[300px] xl:h-96'
      } w-full relative transition-all duration-1000 overflow-hidden rounded bg-primaryColor-50`}
    >
      {item.type === galleryTypeMap.image.key && (
        <a href={UPLOAD_BASE_URL + item.content} target='_blank' rel='noopener noreferrer'>
          <ImageWithPrefix
            src={item.content}
            height={400}
            width={400}
            className='h-full object-contain w-full cursor-pointer transition-all duration-1000 rounded'
            alt={item.title}
          />
        </a>
      )}

      {item.type === galleryTypeMap.video.key && (
        <video src={item.content} controls className='h-full object-contain w-full cursor-pointer transition-all duration-1000 rounded' />
      )}

      {item.type === galleryTypeMap.youtube.key && (
        <iframe
          src={`https://www.youtube.com/embed/${extractYouTubeVideoId(item.content)}`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='h-full w-full'
        />
      )}

      {item.type === galleryTypeMap.instagram.key && (
        <iframe
          src={`https://www.instagram.com/p/${extractInstagramVideoId(item.content)}/embed`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='h-full w-full'
        />
      )}
    </div>
  );
};
