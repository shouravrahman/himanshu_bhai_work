import { Tab } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import CreateTextTemplate from './components/CreateTextTemplate';
import CreateMediaTemplate from './components/CreateMediaTemplate';
import CreateButtonTemplate from './components/CreateButtonTemplate';
import CreateListTemplate from './components/CreateListTemplate';
import CreateLocationTemplate from './components/CreateLocationTemplate';
import Icon from './components/Icon';

const create = () => {
    return (
        <>
            <ul className="flex space-x-2 rtl:space-x-reverse mb-5">
                <li>
                    <Link href="/" className="text-primary hover:underline">
                        Apps
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Template</span>
                </li>
            </ul>
            <div className="mb-5 flex flex-col md:flex-row justify-between ">
                <Tab.Group>
                    <div className="mx-6 md:mx-10 mt-10 sm:mb-0">
                        {/* <Tab.List className="md:min-h-[30vh] mt-3 flex md:w-[10vw]  md:flex-wrap border-b border-white-light dark:border-[#191e3a]">
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${
                                            selected ? 'bg-info text-white !outline-none' : ''
                                        } -mb-[1px] block rounded p-2 md:py-4 before:inline-block hover:bg-info hover:text-white w-full text-sm md:text-base`}
                                    >
                                        Plain Text
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${
                                            selected ? 'bg-info text-white !outline-none' : ''
                                        } -mb-[1px] block rounded p-2 md:py-4 before:inline-block hover:bg-info hover:text-white w-full text-sm md:text-base`}
                                    >
                                        Text with Media
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${
                                            selected ? 'bg-info text-white !outline-none' : ''
                                        } -mb-[1px] block rounded p-2 md:py-4 before:inline-block hover:bg-info hover:text-white w-full text-sm md:text-base`}
                                    >
                                        Message With Button
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${
                                            selected ? 'bg-info text-white !outline-none' : ''
                                        } -mb-[1px] block rounded p-2 md:py-4before:inline-block hover:bg-info hover:text-white w-full text-sm md:text-base`}
                                    >
                                        List Message
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${
                                            selected ? 'bg-info text-white !outline-none' : ''
                                        } -mb-[1px] block rounded p-2 md:py-4 before:inline-block hover:bg-info hover:text-white w-full text-sm md:text-base`}
                                    >
                                        Send Location
                                    </button>
                                )}
                            </Tab>
                        </Tab.List> */}
                        <Tab.List className="m-auto flex md:w-50 flex-row md:flex-col justify-center items-center gap-2 transition-all duration-300">
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    
                                        <button
                                            className={`${
                                                selected ? '!bg-primary text-white !outline-none' : ''
                                            }  rounded-md p-3.5 py-2 transition-all duration-300 hover:bg-blue-500 hover:text-white w-full text-left text-xs md:text-base flex items-center gap-4 group `}
                                        >
                                            <Icon src="/icons/doc.svg" width={25} height={25} alt="icon" className={` ${selected ? 'invert' : 'group-hover:invert'}`} />
                                            <h4>Plain text</h4>
                                        </button>
                                      
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${
                                            selected ? '!bg-primary text-white !outline-none' : ''
                                        }  rounded-md p-3.5 py-2 transition-all duration-300 hover:bg-blue-500 hover:text-white w-full text-left text-xs md:text-base flex items-center gap-4 group`}
                                    >
                                        <Icon src="/icons/file.svg" width={25} height={25} alt="icon" className={` ${selected ? 'invert' : 'group-hover:invert'}`} />

                                        <h4>Text with Media</h4>
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${
                                            selected ? '!bg-primary text-white !outline-none' : ''
                                        }  rounded-md p-3.5 py-2 transition-all duration-300 hover:bg-blue-500 hover:text-white w-full text-left text-xs md:text-base flex items-center gap-4 group`}
                                    >
                                        <Icon src="/icons/chatbtn.svg" width={25} height={25} alt="icon" className={` ${selected ? 'invert' : 'group-hover:invert'}`} />
                                        <h4>Message With Button</h4>
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${
                                            selected ? '!bg-primary text-white !outline-none' : ''
                                        }  rounded-md p-3.5 py-2 transition-all duration-300 hover:bg-blue-500 hover:text-white w-full text-left text-xs md:text-base flex items-center gap-4 group`}
                                    >
                                        <Icon src="/icons/checklist.svg" width={25} height={25} alt="icon" className={` ${selected ? 'invert' : 'group-hover:invert'}`} />
                                        <h4>List Message</h4>
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${
                                            selected ? '!bg-primary text-white !outline-none' : ''
                                        } rounded-md p-3.5 py-2 transition-all duration-300 hover:bg-blue-500 hover:text-white w-full text-left text-xs md:text-base flex items-center gap-4 group`}
                                    >
                                        <Icon src="/icons/location.svg" width={25} height={25} alt="icon" className={` ${selected ? 'invert' : 'group-hover:invert'}`} />

                                        <h4>Send Location</h4>
                                    </button>
                                )}
                            </Tab>
                        </Tab.List>
                    </div>
                    <Tab.Panels className="w-full px-4 md:px-0 md:w-[40vw] mx-auto mt-2">
                        <Tab.Panel>
                            <div className="active pt-5">
                                <h1 className="my-4 font-semibold text-lg">Create Text Template</h1>
                                <CreateTextTemplate />
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="pt-5">
                                <h1 className="my-4 text-lg font-semibold">Create Media Template</h1>
                                <CreateMediaTemplate />
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="pt-5">
                                <h1 className="my-4 text-lg font-semibold">Create Button Template</h1>
                                <CreateButtonTemplate />
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="pt-5">
                                <h1 className="my-4 text-lg font-semibold">Create List Template</h1>
                                <CreateListTemplate />
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="pt-5">
                                <h1 className="my-4 text-lg font-semibold">Create Location Template</h1>
                                <CreateLocationTemplate />
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
                {/* <div className="w-[20vw] border-gray-200">Preview</div> */}
            </div>
        </>
    );
};

export default create;
