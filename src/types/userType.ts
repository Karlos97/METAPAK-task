export interface UserListItem {
  id: number;
  login: string;
  name?: string;
  username?: string;
<<<<<<< HEAD
  // avatarUrl?: string;
  avatar_url?: string;
  // githubUrl?: string;
=======
  avatar_url?: string;
>>>>>>> styling
  html_url?: string;
}

export interface UserDetails {
<<<<<<< HEAD
  // [key: string]: any;\
  // avatarUrl: string
=======
>>>>>>> styling
  login: string;
  avatar_url: string;
  name?: string;
  username?: string;
  id: number;
  html_url?: string;
<<<<<<< HEAD
  // avatar_Url: string
}

// - This view should contain information about the chosen user:
//   - Avatar,
//   - Name,
//   - GitHub username,
//   - Id,
//   - Team badge,
//   - Link do their profile on GitHub,
// - A _Back_ button, which, when clicked, should redirect the user to the home page.
=======
  repositories_count: number;
  repositories: string[];
}
>>>>>>> styling
