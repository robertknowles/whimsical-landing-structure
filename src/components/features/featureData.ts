import { MessageSquare, StickyNote, FolderTree, Navigation } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Feature {
  id: string;
  title: string;
  description: string;
  expandedDetails: string[];
  icon: LucideIcon;
  vimeoId: string;
}

export const features: Feature[] = [
  {
    id: "bookmarking-highlighting",
    title: "Message Bookmarking & Highlighting",
    description: "Quickly save entire messages or highlight specific sentences to capture exactly what matters without the clutter.",
    expandedDetails: [
      "Bookmark entire messages and save directly to folders.",
      "Highlight specific sentences for quick reference.",
      "Keep track of important information with our intuitive bookmarking system."
    ],
    icon: MessageSquare,
    vimeoId: "1041458304" // (1) SavingMessages
  },
  {
    id: "sticky-notes",
    title: "Sticky Notes",
    description: "Add customizable sticky notes to saved messages, providing context and clarity to your ideas.",
    expandedDetails: [
      "Toggle sticky note visibility for a clean workspace.",
      "Annotate messages with reminders or additional details.",
      "Organize and manage your thoughts efficiently."
    ],
    icon: StickyNote,
    vimeoId: "1041460649" // (2) CreatingStickyNote
  },
  {
    id: "folders",
    title: "Folder Organization",
    description: "Organize your saved content into folders with a seamless drag-and-drop interface to keep everything structured.",
    expandedDetails: [
      "Create and manage folders to group related messages and notes.",
      "Rearrange content easily using drag-and-drop functionality.",
      "Access your saved content in a streamlined, organized way."
    ],
    icon: FolderTree,
    vimeoId: "1041464413" // (3) FolderOrganisation
  },
  {
    id: "navigation",
    title: "Smart Navigation",
    description: "Navigate effortlessly with instant previews and seamless access to original chat locations.",
    expandedDetails: [
      "Preview saved messages instantly with a single click.",
      "Jump to original chat locations with ease.",
      "Navigate your bookmarks and notes effortlessly"
    ],
    icon: Navigation,
    vimeoId: "1041464413" // (4) Navigation
  }
];