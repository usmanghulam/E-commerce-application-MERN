import react, { FC } from 'react';
import { Navbar } from '../components/Navbar/containers/Navbar';
import { Footer } from '../components/Footer/containers/footer';
export const Layout: FC<{children: any}> = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className='main'>{children}</div>
            <Footer />
        </>
    )
}