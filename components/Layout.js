import { Header } from "./Header";
import { PageLoader } from "./PageLoader";
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export const Layout = ({
  navigation,
  settings,
  children,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.route.includes('theme')){
      setLoading(false)
    } else{
      setTimeout(() => {
        setLoading(false)
      }, 3000);
    }
  }, []);

  return (
    <>
      {loading &&
        <PageLoader settings={settings}/>
      }   
      <Header
        navigation={navigation}
        settings={settings}
      />
      <main>
        {children}
      </main>
    </>
  );
};
