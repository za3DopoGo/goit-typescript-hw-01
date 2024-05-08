export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type userRoles = Record<UserRole, string>;

const RoleDescription: userRoles = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
