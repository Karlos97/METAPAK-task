export interface UserListItem {
  id: number;
  login: string;
  name?: string;
  username?: string;
  avatar_url?: string;
  html_url?: string;
}

export interface UserDetailsType {
  login: string;
  avatar_url: string;
  name?: string;
  username?: string;
  id: number;
  html_url?: string;
  repositories_count?: number;
  repositories?: string[];
}
