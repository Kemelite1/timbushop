import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa"

const Footer = () => {
    const footerSections =[
        {
            title: 'Quick Links',
            links: ['Home', 'Men', 'Women', 'Kids', 'Brands']
        },
        {
            title: 'Help',
            links: ['Contact Us', 'Track your order', 'Returns', 'Cancel order', 'Payment option', 'FAQ', 'Chat with us', 'Contact us']
        },
        {
            title: 'Company',
            links: ['About us', 'Blogs', 'Career']
        },
        
    ] 

    const socialIcons = [
        {
            icon: <FaFacebook />,
            url: 'XXXXXXXXXXXXXXXXXXXXXXXXX'
        },
        {
            icon: <FaInstagram />,
            url: 'XXXXXXXXXXXXXXXXXXXXXXXXXX'
        },
        {
            icon: <FaTwitter />,
            url: 'XXXXXXXXXXXXXXXXXXXX'
        },
        {
            icon: <FaYoutube />,
            url: 'XXXXXXXXXXXXXXXXXXXXXXXXXX'
        },
        {
            icon: <FaPinterest />,
            url: 'XXXXXXXXXXXXXXXXXXXXXXXXXX'
        }
        
    ]
  return (
    <>
    <section className="bg-generalWhite mt-24 py-4 px-2 w-full">
        <div className="max-w-[1280px] mx-auto grid grid-cols-3 md:grid-cols-6 py-8">
        {
            footerSections.map((section, index) => (
                <div key={index}>
                    <h6 className="mb-8 text-[20px] font-plus-jakarta-sans font-plus-jakarta-bold w-[112px] h-[24px]">{section.title}</h6>

                    <ul>
                        {
                            section.links.map((link, index) => (
                                <li key={index} className="text-18px font-plus-jakarta-sans
                                font-plus-jakarta-light text-[#000000] py-1 ">{link}</li>
                            ))
                        }
                    </ul>

                </div>
            ))
        }

        <div>
            <p className="text-[20px] font-plus-jakarta-sans font-plus-jakarta-bold ">Follow us</p>
            <div className="flex gap-4 mt-8">
            {
                socialIcons.map((icon, index) => (
                    <a key={index} href={icon.url} target="_blank">
                        {icon.icon}
                    </a>
                ))
            }
            </div>
        </div>

        </div>

    </section>

    <div className="bg-secondary1000 py-4 px-2 w-full">
        <div className="mx-auto max-w-[1280px] m-h-[170px] grid grid-cols-3 md:grid-cols-3 text-center py-6">
            <p className="text-[14px] text-[#FFFFFF] font-plus-jakarta-sans font-plus-jakarta-light">Terms of sale</p>
            <p className="text-[14px] text-[#FFFFFF] font-plus-jakarta-sans font-plus-jakarta-light">Terms and Condition</p>
            <p className="text-[14px] text-[#FFFFFF] font-plus-jakarta-sans font-plus-jakarta-light">Policy</p>
        </div>

        <p className="text-[14px] text-[#FFFFFF] text-center font-plus-jakarta-sans font-plus-jakarta-light">&copy; 2024 Timbucloudshop. All rights reserved</p>



    </div>
    </>
  )
}

export default Footer