import { FaEnvelope, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-neo-secondary  p-4 text-center text-sm neo-box mt-4">
      <p className="font-bold"><a className="hover:text-neo-accent" href='https://anjishnu.tech'>Anjishnu Ganguly </a> - 2024 - ProMail</p>
      <div className="flex justify-center  gap-4 mt-2">
        <a href="mailto:anjishnuganguly773@gmail.com" target="_blank" rel="noopener noreferrer" className="text-zinc-900 hover:text-neo-accent">
          <FaEnvelope size={24} />
        </a>
        <a href="https://github.com/Skythrill256" target="_blank" rel="noopener noreferrer" className="text-zinc-900 hover:text-neo-accent">
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  )
}

