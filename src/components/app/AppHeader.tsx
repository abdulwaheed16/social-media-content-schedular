import { Calendar, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="h-16 border-b border-border bg-card flex items-center px-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
          <Calendar className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-xl font-bold">SocialPlan Pro</h1>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </div>
    </header>
  );
};

export default AppHeader;
