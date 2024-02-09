import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '../components/ui/table';

const leads = [
    {
        platform: 'Facebook',
        name: 'Alice Smith',
        email: 'alice.smith@example.com',
        message: 'I saw your ad on Facebook and wanted to learn more about your services.',
    },
    {
        platform: 'Twitter',
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        message: 'Just followed you on Twitter. Your content is awesome!',
    },
    {
        platform: 'Instagram',
        name: 'Charlie Lee',
        email: 'charlie.lee@example.com',
        message: 'Loved your latest Instagram post! Curious about your pricing.',
    },
];

export default function LeadTable({ className }: { className: string }) {
    return (
        <Table className={`p-4 w-full h-full `}>
            <TableHeader className="bg-black dark:bg-inherit">
                <TableRow>
                    <TableHead className="w-[100px]">Platform</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Message</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {leads.map((lead) => (
                    <TableRow key={lead.email}>
                        <TableCell className="font-medium">{lead.platform}</TableCell>
                        <TableCell>{lead.name}</TableCell>
                        <TableCell>{lead.email}</TableCell>
                        <TableCell>{lead.message}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
