import { motion } from "framer-motion";
import VimeoPlayer from "../VimeoPlayer";

interface FeatureVideoProps {
  videoId: string;
}

const FeatureVideo = ({ videoId }: FeatureVideoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="w-full flex items-center justify-center"
    >
      <div className="w-full">
        <VimeoPlayer videoId={videoId} />
      </div>
    </motion.div>
  );
};

export default FeatureVideo;