import { useState } from "react";
import CalendarHeader from "@/components/app/Calendar/CalendarHeader";
import CalendarGrid from "@/components/app/Calendar/CalendarGrid";
import AppHeader from "@/components/app/AppHeader";
import Sidebar from "@/components/app/Sidebar";
import PostModal from "@/components/app/PostEditor/PostModal";
import { ContentProvider } from "@/context/ContentContext";

const AppPage = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setShowPostModal(true);
  };

  return (
    <ContentProvider>
      <div className="min-h-screen bg-background flex flex-col">
        <AppHeader />
        
        <div className="flex-1 flex overflow-hidden">
          <Sidebar />
          
          <main className="flex-1 overflow-auto p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              <CalendarHeader />
              <CalendarGrid onDateClick={handleDateClick} />
            </div>
          </main>
        </div>

        {showPostModal && selectedDate && (
          <PostModal
            date={selectedDate}
            onClose={() => setShowPostModal(false)}
          />
        )}
      </div>
    </ContentProvider>
  );
};

export default AppPage;
