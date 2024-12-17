'use client'
interface Email {
  id: string;
  from: string;
  subject: string;
  date: string;
}

import { useState } from 'react'
import { useInterval } from '@/hooks/useInterval'

export default function EmailClient() {
  const [emailAddress, setEmailAddress] = useState('')
  const [emails, setEmails] = useState<Email[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  useInterval(() => {
    if (emailAddress) {
      loadEmails()
    }
  }, 10000)

  const generateEmail = async () => {
    setIsGenerating(true)
    try {
      const response = await fetch('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1')
      const [newEmail] = await response.json()
      setEmailAddress(newEmail)
      setEmails([])
    } catch (error) {
      console.error('Error generating email:', error)
      alert('Failed to generate a new email address. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const loadEmails = async () => {
    if (!emailAddress) {
      alert('Please generate or input an email address first!')
      return
    }

    const [user, domain] = emailAddress.split('@')
    try {
      const response = await fetch(`https://www.1secmail.com/api/v1/?action=getMessages&login=${user}&domain=${domain}`)
      const newEmails: Email[] = await response.json()
      setEmails(prevEmails => {
        const existingIds = new Set(prevEmails.map(email => email.id))
        const uniqueNewEmails = newEmails.filter(email => !existingIds.has(email.id))
        return [...prevEmails, ...uniqueNewEmails]
      })
    } catch (error) {
      console.error('Error loading emails:', error)
      alert('Failed to load emails. Please try again.')
    }
  }

  return (
    <div className="flex-1  p-4 neo-box m-4">
      <div className="flex flex-col  sm:flex-row gap-4 mb-4">
        <input
          type="text"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          placeholder="Email address"
          className="flex-1 neo-input"
        />
        <button
          onClick={loadEmails}
          className="neo-button bg-neo-secondary"
        >
          Load Mail
        </button>
        <button
          onClick={generateEmail}
          disabled={isGenerating}
          className="neo-button disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? 'Generating...' : 'New Address'}
        </button>
      </div>
      <div className="overflow-x-auto ">
        <table className="neo-table ">
          <thead>
            <tr>
              <th>ID</th>
              <th>From</th>
              <th>Subject</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((email) => (
              <tr key={email.id}>
                <td>{email.id}</td>
                <td>{email.from}</td>
                <td>{email.subject}</td>
                <td>{email.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

