import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 text-gray-800 dark:bg-black/10 dark:text-gray-200">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-lg mb-6">
                Sorry, we couldn't find the page you're looking for.
            </p>
            <Button>
            <Link
                href="/"
            >
                Return Home
            </Link>
            </Button>
            
        </div>
    );
}
