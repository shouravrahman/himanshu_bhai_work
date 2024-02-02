import { Button } from './ui/button';
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from './ui/select';

export default function LeadForm({ onSubmit, className }) {
    return (
        <div className={`${className} max-w-4xl mx-auto p-4 mb-6  border-b-gray-500/50 shadow-md`}>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">Select FB Page</h1>
                <Button variant="outline" onClick={onSubmit}>
                    Cancel
                </Button>
            </div>
            <Select>
                <SelectTrigger id="fb-page">
                    <SelectValue placeholder="Telecrm - India's Best and Simplest Tele-Sales CRM Software" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="telecrm">Telecrm - India's Best and Simplest Tele-Sales CRM Software</SelectItem>
                </SelectContent>
            </Select>
            <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">Select Lead Forms</h2>
                <Select>
                    <SelectTrigger id="lead-form">
                        <SelectValue placeholder="Tele-CRM Social Media CRM" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                        <SelectItem value="social-media-crm">Tele-CRM Social Media CRM</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">Map Your Data</h2>
                <h3 className="text-md font-semibold mb-1">FB Form Question</h3>
                <div className="flex items-center justify-between mb-2">
                    <p className="text-md">Full name</p>
                    <div className="flex items-center">
                        <PhoneCallIcon className="text-blue-500 mr-2" />
                        <Select>
                            <SelectTrigger id="full-name">
                                <SelectValue placeholder="TName" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="tname">TName</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                    <p className="text-md">Phone number</p>
                    <div className="flex items-center">
                        <PhoneCallIcon className="text-blue-500 mr-2" />
                        <Select>
                            <SelectTrigger id="phone-number">
                                <SelectValue placeholder="TPhone" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="tphone">TPhone</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <Button className="mt-2 bg-black dark:bg-white" onClick={onSubmit}>
                Submit
            </Button>
        </div>
    );
}

function PhoneCallIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            <path d="M14.05 2a9 9 0 0 1 8 7.94" />
            <path d="M14.05 6A5 5 0 0 1 18 10" />
        </svg>
    );
}
