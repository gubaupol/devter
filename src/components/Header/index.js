import { useRouter } from "next/router"

export default function Header({
  img = "/noImage.jpg",
  userID = "noUser",
  page = "",
}) {
  const router = useRouter()

  return (
    <>
      <header>
        <div className="left">
          <h2>{page}</h2>
        </div>
        <div className="right">
          <div
            onClick={() => router.push(`user/${userID}`)}
            className="fotoImg"
          >
            <img alt="Foto de usuario" className="userImage" src={img} />
          </div>
        </div>
      </header>
      <style jsx>
        {`
          img {
            width: 100%;
            border-radius: 99px;
          }
          header {
            backdrop-filter: blur(10px);
            background-color: #ffffffdd;

            display: flex;

            align-items: center;
            width: 100%;
            border-bottom: 1px solid #eee;
            height: 49px;
            position: sticky;
            padding: 5px 10px;
            top: 0;
            justify-content: space-between;
          }

          h2 {
            font-size: 21px;
            font-weight: 700;
          }
          .fotoImg {
            display: flex;
            justify-items: centers;
            align-items: center;
            width: 30px;
            height: 30px;
            background-color: #09f;
            border-radius: 99px;
          }
          .userImage {
            height: 100%;
          }
        `}
      </style>
    </>
  )
}
