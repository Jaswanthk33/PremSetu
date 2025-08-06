import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedUploadFlow from '@/components/EnhancedUploadFlow';

const Upload = () => {
  return (
    <div className="relative">
      {/* Minimal Header */}
      <div className="absolute top-4 left-4 z-10">
        <Link to="/">
          <Button variant="ghost" size="sm" className="bg-white/80 backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* New Enhanced Upload Flow */}
      <EnhancedUploadFlow />
    </div>
  );
};

export default Upload;
