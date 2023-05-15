import Image from 'next/image'
import styles from './page.module.css'
import ChatForm from './components/chat/ChatForm/ChatForm'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <a
            href="https://github.com/Muath4/chat-app-client/"
            target="_blank"
            rel="noopener noreferrer"
          >
<p>
      
            <img 
              src="/github-mark.svg"
              alt="Github"
              className={styles.vercelLogo}
              width={30}
              height={30}
            />
          
          </p>
          </a>
        <div>
            <img 
              src="/logo.png"
              alt="Logo"
              className={styles.vercelLogo}
              width={70}
              height={70}
            />
        </div>
      </div>

      <div className={styles.center}>
        <h1>MChat</h1>

      </div>

      <ChatForm />
    </main>
  )
}


