import { useEffect } from "react"
import Head from "next/Head"

import { colors } from "src/styles/theme"
import Button from "src/components/Button"
import GitHub from "src/components/Icons/GitHub"

import { loginWithGitHub } from "firebase/client"

import { useRouter } from "next/router"
import useUser, { USER_STATES } from "src/hooks/useUser"

export default function Home() {
  const router = useRouter()
  const user = useUser()

  // si user es true, te redirecciona
  useEffect(() => {
    user && router.replace("/home")
  }, [user])

  const handleClickGithub = () => {
    try {
      loginWithGitHub()
    } catch (error) {
      console.log(error)
    }
  }
  const handleClickGoogle = () => {
    loginWithGitHub().catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <Head>
        <title>Capella</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <img src="/devter-logo.png" alt="Logo" />
        <h1>Capella</h1>
        <h2>
          Talk about development
          <br />
          with developers 👩‍💻👨‍💻
        </h2>

        <div>
          {user === USER_STATES.NOT_LOGGED && (
            <>
              <Button onClick={handleClickGithub}>
                <GitHub fill="#fff" width={24} height={24} />
                Login with GitHub
              </Button>
              <Button onClick={handleClickGoogle}>Login with Google</Button>
            </>
          )}
          {user === USER_STATES.NOT_KNOWN && (
            <img src="loading.gif" alt="Loading..." />
          )}
        </div>
      </section>

      <style jsx>{`
        img {
          width: 120px;
        }

        div {
          margin-top: 16px;
        }

        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }

        h1 {
          color: ${colors.secondary};
          font-weight: 800;
          margin-bottom: 16px;
        }

        h2 {
          color: ${colors.primary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </>
  )
}
