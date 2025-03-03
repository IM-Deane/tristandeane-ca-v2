import Image from 'next/image'
import React from 'react'

import config from 'site.config'

import { ArrowDownIcon, BriefcaseIcon } from '@/components/utils/icons'

export function Resume() {
  return (
    <div className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'>
      <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
        <BriefcaseIcon className='h-6 w-6 flex-none' />
        <span className='ml-3'>Work</span>
      </h2>
      <ol className='mt-6 space-y-4'>
        {config.resume.map((role, roleIndex) => (
          <li key={roleIndex} className='flex gap-4'>
            <div className='relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
              <Image
                src={role.logo}
                alt={role.company}
                className='h-7 w-7 rounded-full'
                unoptimized
              />
            </div>
            <dl className='flex flex-auto flex-wrap gap-x-2'>
              <dt className='sr-only'>Company</dt>
              <dd className='w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100'>
                {role.company}
              </dd>
              <dt className='sr-only'>Role</dt>
              <dd className='text-xs text-zinc-500 dark:text-zinc-400'>
                {role.position}
              </dd>
              <dt className='sr-only'>Date</dt>
              <dd
                className='ml-auto text-xs text-zinc-400 dark:text-zinc-500'
                aria-label={`${role.startDate} until ${role.endDate}`}
              >
                <time dateTime={role.startDate}>
                  {role.startDate ?? role.startDate}
                </time>{' '}
                <span aria-hidden='true'>—</span>{' '}
                <time dateTime={role.endDate}>{role.endDate}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <a
        href='/resumes/2023-tristan-deane-resume.pdf'
        download
        target='_blank'
        rel='noopener noreferrer'
        className='group mt-6 w-full inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70'
      >
        Download CV
        <ArrowDownIcon className='h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50' />
      </a>
    </div>
  )
}
