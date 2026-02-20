import { memo } from 'react';

const Footer = memo(() => {
    return (
        <footer className="py-12 bg-dark-navy border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-light-slate text-sm">
                    &copy; {new Date().getFullYear()} Manyam Jagadeeswar Reddy. All rights reserved.
                </p>
            </div>
        </footer>
    );
});

export default Footer;
