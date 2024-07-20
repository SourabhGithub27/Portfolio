// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { FaFacebookSquare,FaTwitter,FaInstagram,FaLinkedin} from "react-icons/fa";

function Footer() {
  return (
    <>
        <hr></hr>
        <footer className="py-12">
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex space-x-4">
                    <FaFacebookSquare size={24}></FaFacebookSquare>
                    <FaTwitter size={24}></FaTwitter>
                    <FaInstagram size={24}></FaInstagram>
                    <FaLinkedin size={24}></FaLinkedin>

                    </div>
                    <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
                        <p className="text-sm">
                        &copy; 2024 Sourabh Pradhan. All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer