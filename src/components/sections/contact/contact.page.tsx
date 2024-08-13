'use client'

import { motion } from 'framer-motion'
import React from 'react'
import toast from 'react-hot-toast'

import { sendEmail } from '@/actions/sendEmail'
import SectionHeading from '@/components/shared/section-heading'
import { useSectionInView } from '@/lib/hooks'

import SubmitBtn from './submit-btn'

export default function Contact() {
  const { ref } = useSectionInView('contact')

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="flex w-full flex-col items-center py-20 text-center dark:bg-darkBg dark:text-white"
      initial={{
        opacity: 0.8,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Hit me up!</SectionHeading>
      <div className="w-[min(100%,38rem)]">
        <p className="mb-20 mt-6 text-gray-700 dark:text-white/80">
          Please contact me directly at{' '}
          <a className="underline" href="mailto:azimov.workspace@gmail.com">
            azimov.workspace@gmail.com
          </a>{' '}
          or through this form.
        </p>

        <form
          className="mt-10 flex flex-col dark:text-black"
          action={async (formData) => {
            const { error } = await sendEmail(formData)

            if (error) {
              toast.error(error)
              return
            }

            toast.success('Email sent successfully!')
          }}
        >
          <input
            className="h-14 rounded-lg border bg-gray-50 px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="my-3 h-52 rounded-lg border bg-gray-50 p-4 transition-all dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
            name="message"
            placeholder="Your message 👋"
            required
            maxLength={5000}
          />
          <div className="flex justify-center">
            <SubmitBtn />
          </div>
        </form>
      </div>
    </motion.section>
  )
}
