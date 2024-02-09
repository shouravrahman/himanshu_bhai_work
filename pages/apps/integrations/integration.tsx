import { Button } from './components/ui/button';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import Image from 'next/image';
import { useState } from 'react';
import LeadTable from './components/lead-table';
import LeadForm from './components/lead-form';
import FormTable from './components/form-table';

export default function Integrations() {
    const [showNewLeadForm, setShowNewLeadForm] = useState(false);

    const handleNewLeadFormSubmit = () => {
        console.log('clicked');
        // Handle form submission logic here
        setShowNewLeadForm((prev) => !prev);
    };

    return (
        <div className="max-w-7xl mx-auto  w-full flex flex-col">
            <div className=" w-full flex justify-between px-6  py-4 border-b border-gray-500/20">
                <Button className="text-md px-4 font-semibold bg-blue-700">New Integration</Button>
                <Button onClick={handleNewLeadFormSubmit} variant="outline" className=" text-md font-semibold">
                    New Lead Form
                </Button>
            </div>
            <div className={`flex flex-row mx-auto py-8`}>
                <Tabs defaultValue="profile-1" className="flex gap-16 h-full justify-between items-center">
                    <TabsList className="h-full self-baseline flex flex-col gap-4 px-2 py-2 ">
                        <TabsTrigger value="profile-1">
                            <ProfileCard name="Page 1" id="321562151" />
                        </TabsTrigger>
                        <TabsTrigger value="profile-2">
                            <ProfileCard name="page 2" id="555244151" />
                        </TabsTrigger>
                        <TabsTrigger value="profile-3">
                            <ProfileCard name="page 3" id="799962151" />
                        </TabsTrigger>
                        <TabsTrigger value="profile-4">
                            <ProfileCard name="page 4" id="567562151" />
                        </TabsTrigger>
                    </TabsList>

                    <div className="relative rounded-lg  w-[60rem] h-[80vh]">
                        <TabsContent value="profile-1" className="flex-grow  border-gray-500/20 border rounded-lg" id="page_id_1">
                            <div className=" flex flex-col z-10">
                                <div className="flex-1 flex-grow overflow-hidden transition-transform duration-700 ease-in-out ">
                                    {showNewLeadForm && (
                                        <LeadForm
                                            className="transition-transform duration-1000 ease-in-out z-10" // Ensure form is above table
                                            onSubmit={handleNewLeadFormSubmit}
                                        />
                                    )}

                                    {/* <LeadTable className="flex-2 transition-all duration-500 ease-in-out" /> */}
                                    <LeadTable className={`absolute inset-0 w-full ${showNewLeadForm ? 'h-30' : 'h-full'} transition-transform duration-1000 ease-in-out`} />
                                    <br />
                                    <FormTable />
                                </div>
                                {/* {showNewLeadForm && <NewLeadForm className=" absolute top-60 left-0 w-full h-80  z-20" onSubmit={handleNewLeadFormSubmit} />}
                                <LeadTable /> */}
                                {/* <LeadTable className={`${showNewLeadForm ? 'absolute top-60 left-0' : 'block'}`} /> */}
                            </div>
                        </TabsContent>
                        <TabsContent value="profile-2" className=" flex-grow p-6 h-full  border-gray-500/20 border rounded-lg" id="page_id_2">
                            <LeadForm />
                        </TabsContent>
                        <TabsContent value="profile-3" className=" flex-grow p-6 h-full  border-gray-500/20 border rounded-lg" id="page_id_2">
                            <LeadForm />
                        </TabsContent>
                        <TabsContent value="profile-4" className=" flex-grow p-6 h-full  border-gray-500/20 border rounded-lg" id="page_id_2">
                            <LeadForm />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}

function UserIcon() {
    return <Image className="rounded-full border border-white-100/50 " width="30" height="30" src="/assets/images/auth/user.png" alt="user" />;
}

function ProfileCard({ name, id }: { name: string; id: string }) {
    return (
        // <Link className="flex items-center space-x-2 gap-3 text-left" href="#">
        //     <UserIcon />
        //     <div>
        //         <h2 className="text-lg font-semibold mt-1">{name}</h2>
        //         <p className="text-sm text-gray-500">#{id}</p>
        //     </div>
        // </Link>
        <div className="py-2 px-4 shadow-sm max-w-sm mx-auto  rounded-xl  space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img className="block mx-auto h-10 rounded-full sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face" />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold dark:text-white">{name}</p>
                    <p className="text-slate-500 font-medium dark:text-white/50 ">#{id}</p>
                </div>
            </div>
        </div>
    );
}
