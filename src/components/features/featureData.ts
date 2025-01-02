import { MessageSquare, Highlighter, StickyNote, FolderTree, Navigation } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  vimeoId: string;
}

export const features: Feature[] = [
  {
    id: "bookmarking",
    title: "Message Bookmarking",
    description: "Bookmark entire messages and save directly to folders.",
    icon: MessageSquare,
    vimeoId: "1041458304"
  },
  {
    id: "highlighting",
    title: "Highlighting Tool",
    description: "Highlight specific sentences for quick reference.",
    icon: Highlighter,
    vimeoId: "1041460649"
  },
  {
    id: "sticky-notes",
    title: "Sticky Notes",
    description: "Add context to saved messages with customizable sticky notes.",
    icon: StickyNote,
    vimeoId: "1041463171"
  },
  {
    id: "folders",
    title: "Folder Organization",
    description: "Create and manage folders to group related messages and notes.",
    icon: FolderTree,
    vimeoId: "1041464413"
  },
  {
    id: "navigation",
    title: "Smart Navigation",
    description: "Preview saved messages instantly with a single click.",
    icon: Navigation,
    vimeoId: "1041464413"
  }
];