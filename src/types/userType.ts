export interface UserListItem {
  id: number;
  login: string;
  name?: string;
  username?: string;
  // avatarUrl?: string;
  avatar_url?: string;
  // githubUrl?: string;
  html_url?: string;
}

export interface UserDetails {
  // [key: string]: any;\
  // avatarUrl: string
  login: string;
  avatar_url: string;
  name?: string;
  username?: string;
  id: number;
  html_url?: string;
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
