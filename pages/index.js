import Layout from '@/components/Layout'
import { Roboto_Mono } from 'next/font/google'

const roboto_Mono = Roboto_Mono({ 
  subsets: ['latin'],
  weight: ['300', '500', '700']

})

export default function Home() {
  return (
    <Layout>
      <h1>HomePage</h1>
    </Layout>
  )
}
