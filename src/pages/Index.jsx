import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Bank Statement Converter</h1>
      <p className="text-xl mb-8">Convert your bank statements from PDF to CSV with ease.</p>
      <Button asChild>
        <Link to="/pdf-to-csv">Get Started</Link>
      </Button>
    </div>
  );
};

export default Index;