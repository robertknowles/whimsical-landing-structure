
import { MessageSquare, StickyNote, FolderTree, Navigation, Layout } from "lucide-react";
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
    id: "bookmark-highlight",
    title: "Bookmark or Highlight",
    description: "Save key snippets - from research notes to code.",
    expandedDetails: [
      "Bookmark entire messages for future reference.",
      "Highlight specific text within messages.",
      "Save important code snippets and research notes."
    ],
    icon: MessageSquare,
    vimeoId: "1041458304" // Saving Messages
  },
  {
    id: "sticky-notes",
    title: "Pin Sticky Notes",
    description: "Attach personal context and keep your train of thought.",
    expandedDetails: [
      "Add personal notes to any saved content.",
      "Keep track of your thought process.",
      "Maintain context with custom annotations."
    ],
    icon: StickyNote,
    vimeoId: "1041460649" // Creating Sticky Note
  },
  {
    id: "workspaces",
    title: "Ready-Made Workspaces",
    description: "Organise projects, from essays to research and code.",
    expandedDetails: [
      "Create dedicated spaces for different projects.",
      "Organize content by topic or purpose.",
      "Keep your work structured and accessible."
    ],
    icon: Layout,
    vimeoId: "1041463171" // Folder Organisation
  },
  {
    id: "navigation",
    title: "Message Navigation",
    description: "Quickly jump back to original messages for full context.",
    expandedDetails: [
      "Easily find and revisit important conversations.",
      "Navigate between related messages seamlessly.",
      "Maintain continuity in your work."
    ],
    icon: Navigation,
    vimeoId: "1041464413" // Navigation
  },
  {
    id: "folder-organisation",
    title: "Folder Organisation",
    description: "Sort your AI content into easy-to-navigate folders.",
    expandedDetails: [
      "Create a logical folder structure for your content.",
      "Easily categorize and find saved messages.",
      "Keep your workspace clean and organized."
    ],
    icon: FolderTree,
    vimeoId: "1041463171" // Folder Organisation
  }
];
