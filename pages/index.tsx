import Head from 'next/head'
import { Helmet } from 'react-helmet'
import { Box } from 'rebass'


export default function Home() {
  return (
    <Box>
          <Helmet>
              <meta charSet="utf-8"/>
              <title>E7 Companion: Home</title>
          </Helmet>
    </Box>
  )
}
