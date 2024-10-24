import { ThemeContext } from "@/app/context/themeContext";
import { useFormik } from "formik";
import { useContext } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast, Toaster } from "sonner";

const ContactPage=()=>{

    const {darkMode}=useContext(ThemeContext);

    const initialValues={
        name:"",
        emailId:"",
        message:"",
    };

    const handleConnect = async (values) => {

        toast.promise(
            fetch("/api/emails",{
                method:"POST",
                body:JSON.stringify(values),
            })
            .then(async (response)=>{
                const data=await response.json();

                if(response.ok){
                    console.log(data.message);
                    console.log(values);
                    handleReset();
                    return "Thank you! I will reach out to you soon";
                }
                else{
                    throw new Error(data.message || "Something went wrong");
                }
            }),
            {
                loading:"Sending your message....",
                success:(data)=>data,
                error:(err)=>err.message
            }
        );
    };

    const handleCopy=()=>{
        console.log("copied");
        toast.success("Email ID copied to clipboard", {
            style: {
                background: darkMode ? 'white' : '#2d2d2d', 
                color: darkMode ? 'black' : 'white',    
                border: darkMode ? '1px solid #4B5563' : '1px solid #D1D5DB',
            },
            position:'top',
        });
    }

    const {values,handleBlur,handleChange,handleSubmit,handleReset}=useFormik({
        initialValues:initialValues,
        onSubmit:()=>{handleConnect(values)}
    });


    return(
        <div id="contactSection" className={`w-full h-full relative flex flex-col mt-10 transition-all ease-in-out ${darkMode ? 'text-white' : 'text-black' }`}>
            <div className="relative">
                <h1 className="px-5 text-3xl font-bold ">My Contact</h1>
                <div className={`absolute w-24 mt-1.5 left-5 transition-all ease-in-out ${darkMode?'bg-white':'bg-black'} h-[2.5px]`}></div>
            </div>
            <div className="mt-10 flex flex-col justify-center px-5">
                <div>With over two decades of experience in Sales and Marketing, I focus on developing impactful strategies that foster growth. I’m eager to connect with like-minded professionals who share a commitment to excellence and creativity. Let’s collaborate and explore opportunities together. Feel free to reach out—I’m always open to new ideas and partnership </div>   
                <div className="flex flex-col w-full gap-5 mt-8">
                    <div className="flex gap-3">
                        <span className={`flex items-center rounded-full w-fit p-[6px] text-sm transition-all ease-in-out ${darkMode ? 'bg-white' : 'bg-black '} `}>
                            <svg className={`w-3 h-3 transition-all ease-in-out ${darkMode ? 'text-black' : 'text-white'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                            </svg>
                        </span>
                        <CopyToClipboard text="nitindeshpande123@gmail.com" onCopy={handleCopy} >
                            <p className="cursor-pointer">nitindeshpande123@gmail.com</p>
                        </CopyToClipboard>
                    </div>
                    <div className="flex gap-3 items-center">
                        <span className={`flex items-center h-fit rounded-full w-fit p-[6px] text-sm transition-all ease-in-out ${darkMode ? 'bg-white' : 'bg-black '} `}>
                            <svg className={`w-3 h-3 transition-all ease-in-out ${darkMode ? 'text-black' : 'text-white'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.396c0-1.288-.026-2.946-1.796-2.946-1.798 0-2.072 1.403-2.072 2.85v5.492h-3v-10h2.881v1.367h.041c.401-.762 1.379-1.563 2.839-1.563 3.037 0 3.6 2.002 3.6 4.605v5.591z"/>
                            </svg>
                        </span>
                        <a href="https://www.linkedin.com/in/nitin-kumar-deshpande-/">linkedin.com/in/nitin-deshpande</a>
                    </div>
                    <div className="flex gap-3 items-center">
                        <span className={`flex  items-center h-fit rounded-full w-fit p-[6px] text-sm transition-all ease-in-out ${darkMode ? 'bg-white' : 'bg-black '} `}>
                            <svg className={`w-3 h-3 transition-all ease-in-out ${darkMode ? 'text-black' : 'text-white'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-4.971 0-9 4.029-9 9 0 7.004 7.284 13.341 8.168 14.082.31.253.732.253 1.041 0 .884-.741 8.168-7.078 8.168-14.082 0-4.971-4.029-9-9-9zm0 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                            </svg>
                        </span>
                        <p>Nashik, Maharashtra</p>
                    </div>
                </div>  
                <form onSubmit={handleSubmit} className="flex flex-col mt-8">
                    <label className={`block mb-2 text-sm  transition-all ease-in-out font-medium ${darkMode ? ' text-white' : 'text-gray-900'} `}>Your Name</label>
                    <div className="flex relative w-full mb-6 ">                    
                        <span className={`inline-flex items-center px-3 text-sm transition-all ease-in-out ${darkMode ? 'bg-[#3a3a3a] text-gray-400 border-gray-600' : 'text-gray-900 bg-gray-200 border-gray-300'} border rounded-e-0  border-e-0 rounded-s-md `}>
                            <svg className={`w-5 h-5 transition-all ease-in-out ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                            </svg>
                        </span>
                        <input name="name" required value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" id="name" className={`rounded-none transition-all ease-in-out rounded-e-md border block h-12 text-[15px] w-full p-2.5 ${darkMode ? ' bg-dark border-gray-700 placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : 'border-gray-300 bg-gray-100 border text-gray-900 focus:ring-blue-500 focus:border-blue-500'}`} placeholder="Jon Snow"></input>
                    </div>
                    <label className={`block mb-2 text-sm transition-all ease-in-out font-medium ${darkMode ? ' text-white' : 'text-gray-900'} `}>Your Email</label>
                    <div className="relative w-full mb-6 w-md:mb-4">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg className={`w-5 h-5 transition-all ease-in-out ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                            </svg>
                        </div>
                        <input type="email" required name="emailId" value={values.emailId} onChange={handleChange} onBlur={handleBlur} id="email" className={`ps-12 transition-all ease-in-out rounded-md border block h-12 text-[15px] w-full p-2.5 ${darkMode ? ' bg-dark border-gray-700 placeholder-gray-300 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : 'border-gray-300 bg-gray-100 border text-gray-900 focus:ring-blue-500 focus:border-blue-500'}`} placeholder="user@gmail.com"></input>
                    </div>
                    <label className={`block mb-2 text-sm  transition-all ease-in-out font-medium ${darkMode ? ' text-white' : 'text-gray-900'} `}>Your Message</label>
                    <textarea id="message" required name="message" value={values.message} onChange={handleChange} onBlur={handleBlur} className={`w-full border h-36 transition-all ease-in-out text-sm rounded-md p-2.5 ${darkMode ? ' bg-dark border-gray-700 dark:placeholder-gray-300 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : 'border-gray-300 bg-gray-100 border text-gray-900 focus:ring-blue-500 focus:border-blue-500'}`} placeholder="Type your message here..."></textarea>
                    <div className="flex w-full mt-6 w-md:mt-5 justify-center">
                        <button type="submit" className={`py-2.5  transition-all rounded-md ease-in-out px-7 font-bold text-[15px] ${darkMode?'bg-white text-black':'bg-black text-white'}`}>Connect</button>
                    </div>
                </form>              
                <p className="mt-12 mb-3 text-center text-sm text-[#535A68] w-full">© 2024 Nitin Deshpande. All rights reserved.</p> 
                <Toaster className="mt-[45px]" richColors />
            </div>
        </div>
    );
}

export default ContactPage;