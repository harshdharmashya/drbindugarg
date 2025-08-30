'use client';

import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface TimePickerFormFieldProps {
  control: any;
  name: string;
  label: string;
  value?: Date;
  disabled?: boolean;
}

export default function TimePickerFormField({ control, name, label, value, disabled }: TimePickerFormFieldProps) {
  const [open, setOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState('');
  const [selectedMinute, setSelectedMinute] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');

  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const minutes = Array.from({ length: 12 }, (_, i) => (i * 5).toString().padStart(2, '0'));
  const periods = ['AM', 'PM'];
  const quickSelectTimes = ['08:00 AM', '12:00 PM', '03:00 PM', '06:00 PM', '09:00 PM', '11:59 PM'];

  const formatTime = (date: Date | undefined) => {
    if (!date) return '';

    const parsedDate = new Date(date);

    return parsedDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  const parseTime = (timeString: string): Date => {
    const [time, period] = timeString.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(period === 'PM' && hours !== 12 ? hours + 12 : hours === 12 && period === 'AM' ? 0 : hours);
    date.setMinutes(minutes);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  };

  useEffect(() => {
    if (value) {
      const timeString = formatTime(value);
      const [time, period] = timeString.split(' ');
      const [hour, minute] = time.split(':');
      setSelectedHour(hour);
      setSelectedMinute(minute);
      setSelectedPeriod(period);
    }
  }, [value]);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex flex-col'>
          <FormLabel className='primary-label'>{label}</FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant='outline'
                  role='combobox'
                  aria-expanded={open}
                  className={cn('w-full justify-between text-left h-12 font-normal', !field.value && 'text-muted-foreground')}
                  disabled={disabled}
                >
                  {formatTime(field.value) || 'Select time'}
                  <Clock className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className='w-[350px] p-0' align='start'>
              <div className='flex items-center justify-between p-3 border-b'>
                <Select
                  value={selectedHour}
                  onValueChange={(value) => {
                    setSelectedHour(value);
                    field.onChange(parseTime(`${value}:${selectedMinute} ${selectedPeriod}`));
                  }}
                >
                  <SelectTrigger className='w-[100px]'>
                    <SelectValue placeholder='Hour' />
                  </SelectTrigger>
                  <SelectContent>
                    {hours.map((hour) => (
                      <SelectItem key={hour} value={hour}>
                        {hour}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span className='text-xl'>:</span>
                <Select
                  value={selectedMinute}
                  onValueChange={(value) => {
                    setSelectedMinute(value);
                    field.onChange(parseTime(`${selectedHour}:${value} ${selectedPeriod}`));
                  }}
                >
                  <SelectTrigger className='w-[100px]'>
                    <SelectValue placeholder='Minute' />
                  </SelectTrigger>
                  <SelectContent>
                    {minutes.map((minute) => (
                      <SelectItem key={minute} value={minute}>
                        {minute}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={selectedPeriod}
                  onValueChange={(value) => {
                    setSelectedPeriod(value);
                    field.onChange(parseTime(`${selectedHour}:${selectedMinute} ${value}`));
                    setOpen(false);
                  }}
                >
                  <SelectTrigger className='w-[100px]'>
                    <SelectValue placeholder='AM/PM' />
                  </SelectTrigger>
                  <SelectContent>
                    {periods.map((period) => (
                      <SelectItem key={period} value={period}>
                        {period}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className='grid grid-cols-4 gap-2 p-3'>
                {quickSelectTimes.map((time) => (
                  <Button
                    key={time}
                    variant='outline'
                    size='sm'
                    className='text-xs'
                    onClick={() => {
                      const date = parseTime(time);
                      setSelectedHour(formatTime(date).split(':')[0]);
                      setSelectedMinute(formatTime(date).split(':')[1].split(' ')[0]);
                      setSelectedPeriod(formatTime(date).split(' ')[1]);
                      field.onChange(date);
                      setOpen(false);
                    }}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
