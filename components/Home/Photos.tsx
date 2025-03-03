import Image from 'next/image'
import React from 'react'

import clsx from 'clsx'

import banffRun from '/public/images/photos/banff-run-2022.jpeg'
import darthVader from '/public/images/photos/darth-vader.png'
import tristanMontreal from '/public/images/photos/tristan-montreal.jpeg'
import tristanProfile from '/public/images/photos/tristan-profile.jpg'
import tristanVanGoh from '/public/images/photos/tristan-van-goh.jpeg'

export function Photos() {
  const rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2'
  ]

  return (
    <div className='mt-16 sm:mt-20'>
      <div className='-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
        {[
          tristanVanGoh,
          tristanMontreal,
          darthVader,
          banffRun,
          tristanProfile
        ].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=''
              sizes='(min-width: 640px) 18rem, 11rem'
              className='absolute inset-0 h-full w-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  )
}
