import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Home({food}) {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
    <Head>
<title>{food.name} {food.time}</title>
    </Head>
      <p>Food name: {id}</p>
      <img src={food.id} />
    </>
  )
}

export async function getStatProps({ params }) {
  const req = await fetch(`http://localhost/${params.id}.json`)
  //convert to json
  const data = await req.json()

  return {
    props: { food: data },
  }
}


export async function getStaticPaths(){
    const req = await fetch('http://localhost:3000/food.json')
    //convert to json
    const data = await req.json()


    // Get the paths we want to pre-render based on posts
    const paths = data.map((food) => ({
        params: { id: food.id },
      }))

    return{
        paths,
        fallback:false
    }

}