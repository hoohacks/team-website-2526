
export default function SectionHeader({ children }: { children?: React.ReactNode }) {
    return (
        <h1 className="text-4xl text-center font-bold py-15">{children}</h1>
    );
}
