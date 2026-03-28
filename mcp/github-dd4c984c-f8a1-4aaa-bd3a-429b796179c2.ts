/**
 * MCP Integration: github-mcp-server
 * Server: https://api.githubcopilot.com/mcp/
 *
 * Server Instructions: 
<known-limitations>
IMPORTANT: This GitHub integration has the following known limitations:

1. **Use list_pull_requests instead of search_pull_requests for PR summaries**: When listing or summarizing pull requests for the user, you MUST use the `list_pull_requests` tool with explicit `owner` and `repo` parameters instead of `search_pull_requests`. The search tool uses GitHub's global search API which returns PRs from ANY repository (including public repos where the user was mentioned or requested as reviewer), even if the user doesn't have read/write access to those repos. This can expose PRs from repositories the user shouldn't see.

2. **Always specify repository context**: When fetching PRs, always ask the user which specific repositories they want to see PRs from, or use their known repositories. Do not use search queries like `involves:@me` or `review-requested:@me` without explicit repository filtering.

3. **For PR reviews**: When the user asks to "review PRs" or see "PRs to review", ask them which repositories they want to check, then use `list_pull_requests` for each specified repository.

4. **PR link formatting**: When sharing GitHub pull request links with the user, always use shortlink format: [31_view-pr](https://github.com/{owner}/{repo}/pull/{number}). This applies to any PR URL you share.
</known-limitations>
 */
import { callFunction, type CallToolResult } from "./call-function.ts";

// --- add_comment_to_pending_review ---
export interface Input {
  /**
   * The text of the review comment
   */
  body: string;
  /**
   * The line of the blob in the pull request diff that the comment applies to. For multi-line comments, the last line of the range
   */
  line?: number;
  /**
   * The relative path to the file that necessitates a comment
   */
  path: string;
  /**
   * Repository name
   */
  repo: string;
  /**
   * The side of the diff to comment on. LEFT indicates the previous state, RIGHT indicates the new state
   */
  side?: "LEFT" | "RIGHT";
  /**
   * Repository owner
   */
  owner: string;
  /**
   * For multi-line comments, the first line of the range that the comment applies to
   */
  startLine?: number;
  /**
   * For multi-line comments, the starting side of the diff that the comment applies to. LEFT indicates the previous state, RIGHT indicates the new state
   */
  startSide?: "LEFT" | "RIGHT";
  /**
   * Pull request number
   */
  pullNumber: number;
  /**
   * The level at which the comment is targeted
   */
  subjectType: "FILE" | "LINE";
  [k: string]: unknown;
}

/** Add review comment to the requester's latest pending pull request review. A pending review needs to already exist to call this (check with the user if not sure). */
export async function addCommentToPendingReview(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "add_comment_to_pending_review", params);
}

// --- add_issue_comment ---
export interface Input {
  /**
   * Comment content
   */
  body: string;
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner
   */
  owner: string;
  /**
   * Issue number to comment on
   */
  issue_number: number;
  [k: string]: unknown;
}

/** Add a comment to a specific issue in a GitHub repository. Use this tool to add comments to pull requests as well (in this case pass pull request number as issue_number), but only if user is not asking specifically to add review comments. */
export async function addIssueComment(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "add_issue_comment", params);
}

// --- add_reply_to_pull_request_comment ---
export interface Input {
  /**
   * The text of the reply
   */
  body: string;
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner
   */
  owner: string;
  /**
   * The ID of the comment to reply to
   */
  commentId: number;
  /**
   * Pull request number
   */
  pullNumber: number;
  [k: string]: unknown;
}

/** Add a reply to an existing pull request comment. This creates a new comment that is linked as a reply to the specified comment. */
export async function addReplyToPullRequestComment(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "add_reply_to_pull_request_comment", params);
}

// --- create_branch ---
export interface Input {
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner
   */
  owner: string;
  /**
   * Name for new branch
   */
  branch: string;
  /**
   * Source branch (defaults to repo default)
   */
  from_branch?: string;
  [k: string]: unknown;
}

/** Create a new branch in a GitHub repository */
export async function createBranch(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "create_branch", params);
}

// --- create_or_update_file ---
export interface Input {
  /**
   * The blob SHA of the file being replaced. Required if the file already exists.
   */
  sha?: string;
  /**
   * Path where to create/update the file
   */
  path: string;
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner (username or organization)
   */
  owner: string;
  /**
   * Branch to create/update the file in
   */
  branch: string;
  /**
   * Content of the file
   */
  content: string;
  /**
   * Commit message
   */
  message: string;
  [k: string]: unknown;
}

/** Create or update a single file in a GitHub repository. 
If updating, you should provide the SHA of the file you want to update. Use this tool to create or update a file in a GitHub repository remotely; do not use it for local file operations.

In order to obtain the SHA of original file version before updating, use the following git command:
git rev-parse <branch>:<path to file>

SHA MUST be provided for existing file updates.
 */
export async function createOrUpdateFile(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "create_or_update_file", params);
}

// --- create_pull_request ---
export interface Input {
  /**
   * Branch to merge into
   */
  base: string;
  /**
   * PR description
   */
  body?: string;
  /**
   * Branch containing changes
   */
  head: string;
  /**
   * Repository name
   */
  repo: string;
  /**
   * Create as draft PR
   */
  draft?: boolean;
  /**
   * Repository owner
   */
  owner: string;
  /**
   * PR title
   */
  title: string;
  /**
   * Allow maintainer edits
   */
  maintainer_can_modify?: boolean;
  [k: string]: unknown;
}

/** Create a new pull request in a GitHub repository. */
export async function createPullRequest(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "create_pull_request", params);
}

// --- create_repository ---
export interface Input {
  /**
   * Repository name
   */
  name: string;
  /**
   * Whether repo should be private
   */
  private?: boolean;
  /**
   * Initialize with README
   */
  autoInit?: boolean;
  /**
   * Repository description
   */
  description?: string;
  /**
   * Organization to create the repository in (omit to create in your personal account)
   */
  organization?: string;
  [k: string]: unknown;
}

/** Create a new GitHub repository in your account or specified organization */
export async function createRepository(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "create_repository", params);
}

// --- delete_file ---
export interface Input {
  /**
   * Path to the file to delete
   */
  path: string;
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner (username or organization)
   */
  owner: string;
  /**
   * Branch to delete the file from
   */
  branch: string;
  /**
   * Commit message
   */
  message: string;
  [k: string]: unknown;
}

/** Delete a file from a GitHub repository */
export async function deleteFile(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "delete_file", params);
}

// --- fork_repository ---
export interface Input {
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner
   */
  owner: string;
  /**
   * Organization to fork to
   */
  organization?: string;
  [k: string]: unknown;
}

/** Fork a GitHub repository to your account or specified organization */
export async function forkRepository(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "fork_repository", params);
}

// --- get_commit ---
export interface Input {
  /**
   * Commit SHA, branch name, or tag name
   */
  sha: string;
  /**
   * Page number for pagination (min 1)
   */
  page?: number;
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner
   */
  owner: string;
  /**
   * Results per page for pagination (min 1, max 100)
   */
  perPage?: number;
  /**
   * Whether to include file diffs and stats in the response. Default is true.
   */
  include_diff?: boolean;
  [k: string]: unknown;
}

/** Get details for a commit from a GitHub repository */
export async function getCommit(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "get_commit", params);
}

// --- get_file_contents ---
export interface Input {
  /**
   * Accepts optional git refs such as \`refs/tags/{tag}\`, \`refs/heads/{branch}\` or \`refs/pull/{pr_number}/head\`
   */
  ref?: string;
  /**
   * Accepts optional commit SHA. If specified, it will be used instead of ref
   */
  sha?: string;
  /**
   * Path to file/directory
   */
  path?: string;
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner (username or organization)
   */
  owner: string;
  [k: string]: unknown;
}

/** Get the contents of a file or directory from a GitHub repository */
export async function getFileContents(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "get_file_contents", params);
}

// --- get_label ---
export interface Input {
  /**
   * Label name.
   */
  name: string;
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner (username or organization name)
   */
  owner: string;
  [k: string]: unknown;
}

/** Get a specific label from a repository. */
export async function getLabel(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "get_label", params);
}

// --- get_latest_release ---
export interface Input {
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner
   */
  owner: string;
  [k: string]: unknown;
}

/** Get the latest release in a GitHub repository */
export async function getLatestRelease(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "get_latest_release", params);
}

// --- get_me ---
export interface Input {
  [k: string]: unknown;
}

/** Get details of the authenticated GitHub user. Use this when a request is about the user's own profile for GitHub. Or when information is missing to build other tool calls. */
export async function getMe(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "get_me", params);
}

// --- get_release_by_tag ---
export interface Input {
  /**
   * Tag name (e.g., 'v1.0.0')
   */
  tag: string;
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner
   */
  owner: string;
  [k: string]: unknown;
}

/** Get a specific release by its tag name in a GitHub repository */
export async function getReleaseByTag(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "get_release_by_tag", params);
}

// --- get_tag ---
export interface Input {
  /**
   * Tag name
   */
  tag: string;
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner
   */
  owner: string;
  [k: string]: unknown;
}

/** Get details about a specific git tag in a GitHub repository */
export async function getTag(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "get_tag", params);
}

// --- get_team_members ---
export interface Input {
  /**
   * Organization login (owner) that contains the team.
   */
  org: string;
  /**
   * Team slug
   */
  team_slug: string;
  [k: string]: unknown;
}

/** Get member usernames of a specific team in an organization. Limited to organizations accessible with current credentials */
export async function getTeamMembers(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "get_team_members", params);
}

// --- get_teams ---
export interface Input {
  /**
   * Username to get teams for. If not provided, uses the authenticated user.
   */
  user?: string;
  [k: string]: unknown;
}

/** Get details of the teams the user is a member of. Limited to organizations accessible with current credentials */
export async function getTeams(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "get_teams", params);
}

// --- issue_read ---
export interface Input {
  /**
   * Page number for pagination (min 1)
   */
  page?: number;
  /**
   * The name of the repository
   */
  repo: string;
  /**
   * The owner of the repository
   */
  owner: string;
  /**
   * The read operation to perform on a single issue.
   * Options are:
   * 1. get - Get details of a specific issue.
   * 2. get_comments - Get issue comments.
   * 3. get_sub_issues - Get sub-issues of the issue.
   * 4. get_labels - Get labels assigned to the issue.
   *
   */
  method: "get" | "get_comments" | "get_sub_issues" | "get_labels";
  /**
   * Results per page for pagination (min 1, max 100)
   */
  perPage?: number;
  /**
   * The number of the issue
   */
  issue_number: number;
  [k: string]: unknown;
}

/** Get information about a specific issue in a GitHub repository. */
export async function issueRead(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "issue_read", params);
}

// --- issue_write ---
export interface Input {
  /**
   * Issue body content
   */
  body?: string;
  /**
   * Repository name
   */
  repo: string;
  /**
   * Type of this issue. Only use if the repository has issue types configured. Use list_issue_types tool to get valid type values for the organization. If the repository doesn't support issue types, omit this parameter.
   */
  type?: string;
  /**
   * Repository owner
   */
  owner: string;
  /**
   * New state
   */
  state?: "open" | "closed";
  /**
   * Issue title
   */
  title?: string;
  /**
   * Labels to apply to this issue
   */
  labels?: string[];
  /**
   * Write operation to perform on a single issue.
   * Options are:
   * - 'create' - creates a new issue.
   * - 'update' - updates an existing issue.
   *
   */
  method: "create" | "update";
  /**
   * Usernames to assign to this issue
   */
  assignees?: string[];
  /**
   * Milestone number
   */
  milestone?: number;
  /**
   * Issue number that this issue is a duplicate of. Only used when state_reason is 'duplicate'.
   */
  duplicate_of?: number;
  /**
   * Issue number to update
   */
  issue_number?: number;
  /**
   * Reason for the state change. Ignored unless state is changed.
   */
  state_reason?: "completed" | "not_planned" | "duplicate";
  [k: string]: unknown;
}

/** Create a new or update an existing issue in a GitHub repository. */
export async function issueWrite(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "issue_write", params);
}

// --- list_branches ---
export interface Input {
  /**
   * Page number for pagination (min 1)
   */
  page?: number;
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner
   */
  owner: string;
  /**
   * Results per page for pagination (min 1, max 100)
   */
  perPage?: number;
  [k: string]: unknown;
}

/** List branches in a GitHub repository */
export async function listBranches(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "list_branches", params);
}

// --- list_commits ---
export interface Input {
  /**
   * Commit SHA, branch or tag name to list commits of. If not provided, uses the default branch of the repository. If a commit SHA is provided, will list commits up to that SHA.
   */
  sha?: string;
  /**
   * Page number for pagination (min 1)
   */
  page?: number;
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner
   */
  owner: string;
  /**
   * Author username or email address to filter commits by
   */
  author?: string;
  /**
   * Results per page for pagination (min 1, max 100)
   */
  perPage?: number;
  [k: string]: unknown;
}

/** Get list of commits of a branch in a GitHub repository. Returns at least 30 results per page by default, but can return more if specified using the perPage parameter (up to 100). */
export async function listCommits(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "list_commits", params);
}

// --- list_issue_types ---
export interface Input {
  /**
   * The organization owner of the repository
   */
  owner: string;
  [k: string]: unknown;
}

/** List supported issue types for repository owner (organization). */
export async function listIssueTypes(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "list_issue_types", params);
}

// --- list_issues ---
export interface Input {
  /**
   * Repository name
   */
  repo: string;
  /**
   * Cursor for pagination. Use the endCursor from the previous page's PageInfo for GraphQL APIs.
   */
  after?: string;
  /**
   * Repository owner
   */
  owner: string;
  /**
   * Filter by date (ISO 8601 timestamp)
   */
  since?: string;
  /**
   * Filter by state, by default both open and closed issues are returned when not provided
   */
  state?: "OPEN" | "CLOSED";
  /**
   * Filter by labels
   */
  labels?: string[];
  /**
   * Order issues by field. If provided, the 'direction' also needs to be provided.
   */
  orderBy?: "CREATED_AT" | "UPDATED_AT" | "COMMENTS";
  /**
   * Results per page for pagination (min 1, max 100)
   */
  perPage?: number;
  /**
   * Order direction. If provided, the 'orderBy' also needs to be provided.
   */
  direction?: "ASC" | "DESC";
  [k: string]: unknown;
}

/** List issues in a GitHub repository. For pagination, use the 'endCursor' from the previous response's 'pageInfo' in the 'after' parameter. */
export async function listIssues(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "list_issues", params);
}

// --- list_pull_requests ---
export interface Input {
  /**
   * Filter by base branch
   */
  base?: string;
  /**
   * Filter by head user/org and branch
   */
  head?: string;
  /**
   * Page number for pagination (min 1)
   */
  page?: number;
  /**
   * Repository name
   */
  repo: string;
  /**
   * Sort by
   */
  sort?: "created" | "updated" | "popularity" | "long-running";
  /**
   * Repository owner
   */
  owner: string;
  /**
   * Filter by state
   */
  state?: "open" | "closed" | "all";
  /**
   * Results per page for pagination (min 1, max 100)
   */
  perPage?: number;
  /**
   * Sort direction
   */
  direction?: "asc" | "desc";
  [k: string]: unknown;
}

/** List pull requests in a GitHub repository. If the user specifies an author, then DO NOT use this tool and use the search_pull_requests tool instead. */
export async function listPullRequests(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "list_pull_requests", params);
}

// --- list_releases ---
export interface Input {
  /**
   * Page number for pagination (min 1)
   */
  page?: number;
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner
   */
  owner: string;
  /**
   * Results per page for pagination (min 1, max 100)
   */
  perPage?: number;
  [k: string]: unknown;
}

/** List releases in a GitHub repository */
export async function listReleases(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "list_releases", params);
}

// --- list_tags ---
export interface Input {
  /**
   * Page number for pagination (min 1)
   */
  page?: number;
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner
   */
  owner: string;
  /**
   * Results per page for pagination (min 1, max 100)
   */
  perPage?: number;
  [k: string]: unknown;
}

/** List git tags in a GitHub repository */
export async function listTags(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "list_tags", params);
}

// --- merge_pull_request ---
export interface Input {
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner
   */
  owner: string;
  /**
   * Pull request number
   */
  pullNumber: number;
  /**
   * Title for merge commit
   */
  commit_title?: string;
  /**
   * Merge method
   */
  merge_method?: "merge" | "squash" | "rebase";
  /**
   * Extra detail for merge commit
   */
  commit_message?: string;
  [k: string]: unknown;
}

/** Merge a pull request in a GitHub repository. */
export async function mergePullRequest(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "merge_pull_request", params);
}

// --- pull_request_read ---
export interface Input {
  /**
   * Page number for pagination (min 1)
   */
  page?: number;
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner
   */
  owner: string;
  /**
   * Action to specify what pull request data needs to be retrieved from GitHub.
   * Possible options:
   *  1. get - Get details of a specific pull request.
   *  2. get_diff - Get the diff of a pull request.
   *  3. get_status - Get combined commit status of a head commit in a pull request.
   *  4. get_files - Get the list of files changed in a pull request. Use with pagination parameters to control the number of results returned.
   *  5. get_review_comments - Get review threads on a pull request. Each thread contains logically grouped review comments made on the same code location during pull request reviews. Returns threads with metadata (isResolved, isOutdated, isCollapsed) and their associated comments. Use cursor-based pagination (perPage, after) to control results.
   *  6. get_reviews - Get the reviews on a pull request. When asked for review comments, use get_review_comments method.
   *  7. get_comments - Get comments on a pull request. Use this if user doesn't specifically want review comments. Use with pagination parameters to control the number of results returned.
   *  8. get_check_runs - Get check runs for the head commit of a pull request. Check runs are the individual CI/CD jobs and checks that run on the PR.
   *
   */
  method:
    | "get"
    | "get_diff"
    | "get_status"
    | "get_files"
    | "get_review_comments"
    | "get_reviews"
    | "get_comments"
    | "get_check_runs";
  /**
   * Results per page for pagination (min 1, max 100)
   */
  perPage?: number;
  /**
   * Pull request number
   */
  pullNumber: number;
  [k: string]: unknown;
}

/** Get information on a specific pull request in GitHub repository. */
export async function pullRequestRead(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "pull_request_read", params);
}

// --- pull_request_review_write ---
export interface Input {
  /**
   * Review comment text
   */
  body?: string;
  /**
   * Repository name
   */
  repo: string;
  /**
   * Review action to perform.
   */
  event?: "APPROVE" | "REQUEST_CHANGES" | "COMMENT";
  /**
   * Repository owner
   */
  owner: string;
  /**
   * The write operation to perform on pull request review.
   */
  method: "create" | "submit_pending" | "delete_pending";
  /**
   * SHA of commit to review
   */
  commitID?: string;
  /**
   * Pull request number
   */
  pullNumber: number;
  [k: string]: unknown;
}

/** Create and/or submit, delete review of a pull request.

Available methods:
- create: Create a new review of a pull request. If "event" parameter is provided, the review is submitted. If "event" is omitted, a pending review is created.
- submit_pending: Submit an existing pending review of a pull request. This requires that a pending review exists for the current user on the specified pull request. The "body" and "event" parameters are used when submitting the review.
- delete_pending: Delete an existing pending review of a pull request. This requires that a pending review exists for the current user on the specified pull request.
 */
export async function pullRequestReviewWrite(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "pull_request_review_write", params);
}

// --- push_files ---
export interface Input {
  /**
   * Repository name
   */
  repo: string;
  /**
   * Array of file objects to push, each object with path (string) and content (string)
   */
  files: {
    /**
     * path to the file
     */
    path: string;
    /**
     * file content
     */
    content: string;
    [k: string]: unknown;
  }[];
  /**
   * Repository owner
   */
  owner: string;
  /**
   * Branch to push to
   */
  branch: string;
  /**
   * Commit message
   */
  message: string;
  [k: string]: unknown;
}

/** Push multiple files to a GitHub repository in a single commit */
export async function pushFiles(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "push_files", params);
}

// --- request_copilot_review ---
export interface Input {
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner
   */
  owner: string;
  /**
   * Pull request number
   */
  pullNumber: number;
  [k: string]: unknown;
}

/** Request a GitHub Copilot code review for a pull request. Use this for automated feedback on pull requests, usually before requesting a human reviewer. */
export async function requestCopilotReview(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "request_copilot_review", params);
}

// --- run_secret_scanning ---
export interface Input {
  /**
   * Repository name
   */
  repo: string;
  /**
   * Array of file contents, snippets, or diff hunks to scan for secrets. These must be raw contents, not repository file paths.
   *
   * @minItems 1
   * @maxItems 100
   */
  files: [string, ...string[]];
  /**
   * Repository owner
   */
  owner: string;
  [k: string]: unknown;
}

/** Scan files, content, or recent changes for secrets such as API keys, passwords, tokens, and credentials.

This tool is intended for targeted scans of specific files, snippets, or diffs provided directly as content. It accepts file contents or diffs and returns detected secrets with their locations and related secret scanning metadata. Content must not be empty. For full repository scanning, other mechanisms are available.

Caveats:

- Only files within the codebase should be scanned. Files outside of the codebase should not be sent.
- Files listed in .gitignore should be skipped. */
export async function runSecretScanning(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "run_secret_scanning", params);
}

// --- search_code ---
export interface Input {
  /**
   * Page number for pagination (min 1)
   */
  page?: number;
  /**
   * Sort field ('indexed' only)
   */
  sort?: string;
  /**
   * Sort order for results
   */
  order?: "asc" | "desc";
  /**
   * Search query using GitHub's powerful code search syntax. Examples: 'content:Skill language:Java org:github', 'NOT is:archived language:Python OR language:go', 'repo:github/github-mcp-server'. Supports exact matching, language filters, path filters, and more.
   */
  query: string;
  /**
   * Results per page for pagination (min 1, max 100)
   */
  perPage?: number;
  [k: string]: unknown;
}

/** Fast and precise code search across ALL GitHub repositories using GitHub's native search engine. Best for finding exact symbols, functions, classes, or specific code patterns. */
export async function searchCode(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "search_code", params);
}

// --- search_issues ---
export interface Input {
  /**
   * Page number for pagination (min 1)
   */
  page?: number;
  /**
   * Optional repository name. If provided with owner, only issues for this repository are listed.
   */
  repo?: string;
  /**
   * Sort field by number of matches of categories, defaults to best match
   */
  sort?:
    | "comments"
    | "reactions"
    | "reactions-+1"
    | "reactions--1"
    | "reactions-smile"
    | "reactions-thinking_face"
    | "reactions-heart"
    | "reactions-tada"
    | "interactions"
    | "created"
    | "updated";
  /**
   * Sort order
   */
  order?: "asc" | "desc";
  /**
   * Optional repository owner. If provided with repo, only issues for this repository are listed.
   */
  owner?: string;
  /**
   * Search query using GitHub issues search syntax
   */
  query: string;
  /**
   * Results per page for pagination (min 1, max 100)
   */
  perPage?: number;
  [k: string]: unknown;
}

/** Search for issues in GitHub repositories using issues search syntax already scoped to is:issue */
export async function searchIssues(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "search_issues", params);
}

// --- search_pull_requests ---
export interface Input {
  /**
   * Page number for pagination (min 1)
   */
  page?: number;
  /**
   * Optional repository name. If provided with owner, only pull requests for this repository are listed.
   */
  repo?: string;
  /**
   * Sort field by number of matches of categories, defaults to best match
   */
  sort?:
    | "comments"
    | "reactions"
    | "reactions-+1"
    | "reactions--1"
    | "reactions-smile"
    | "reactions-thinking_face"
    | "reactions-heart"
    | "reactions-tada"
    | "interactions"
    | "created"
    | "updated";
  /**
   * Sort order
   */
  order?: "asc" | "desc";
  /**
   * Optional repository owner. If provided with repo, only pull requests for this repository are listed.
   */
  owner?: string;
  /**
   * Search query using GitHub pull request search syntax
   */
  query: string;
  /**
   * Results per page for pagination (min 1, max 100)
   */
  perPage?: number;
  [k: string]: unknown;
}

/** Search for pull requests in GitHub repositories using issues search syntax already scoped to is:pr */
export async function searchPullRequests(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "search_pull_requests", params);
}

// --- search_repositories ---
export interface Input {
  /**
   * Page number for pagination (min 1)
   */
  page?: number;
  /**
   * Sort repositories by field, defaults to best match
   */
  sort?: "stars" | "forks" | "help-wanted-issues" | "updated";
  /**
   * Sort order
   */
  order?: "asc" | "desc";
  /**
   * Repository search query. Examples: 'machine learning in:name stars:>1000 language:python', 'topic:react', 'user:facebook'. Supports advanced search syntax for precise filtering.
   */
  query: string;
  /**
   * Results per page for pagination (min 1, max 100)
   */
  perPage?: number;
  /**
   * Return minimal repository information (default: true). When false, returns full GitHub API repository objects.
   */
  minimal_output?: boolean;
  [k: string]: unknown;
}

/** Find GitHub repositories by name, description, readme, topics, or other metadata. Perfect for discovering projects, finding examples, or locating specific repositories across GitHub. */
export async function searchRepositories(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "search_repositories", params);
}

// --- search_users ---
export interface Input {
  /**
   * Page number for pagination (min 1)
   */
  page?: number;
  /**
   * Sort users by number of followers or repositories, or when the person joined GitHub.
   */
  sort?: "followers" | "repositories" | "joined";
  /**
   * Sort order
   */
  order?: "asc" | "desc";
  /**
   * User search query. Examples: 'john smith', 'location:seattle', 'followers:>100'. Search is automatically scoped to type:user.
   */
  query: string;
  /**
   * Results per page for pagination (min 1, max 100)
   */
  perPage?: number;
  [k: string]: unknown;
}

/** Find GitHub users by username, real name, or other profile information. Useful for locating developers, contributors, or team members. */
export async function searchUsers(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "search_users", params);
}

// --- sub_issue_write ---
export interface Input {
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner
   */
  owner: string;
  /**
   * The action to perform on a single sub-issue
   * Options are:
   * - 'add' - add a sub-issue to a parent issue in a GitHub repository.
   * - 'remove' - remove a sub-issue from a parent issue in a GitHub repository.
   * - 'reprioritize' - change the order of sub-issues within a parent issue in a GitHub repository. Use either 'after_id' or 'before_id' to specify the new position.
   *
   */
  method: string;
  /**
   * The ID of the sub-issue to be prioritized after (either after_id OR before_id should be specified)
   */
  after_id?: number;
  /**
   * The ID of the sub-issue to be prioritized before (either after_id OR before_id should be specified)
   */
  before_id?: number;
  /**
   * The number of the parent issue
   */
  issue_number: number;
  /**
   * The ID of the sub-issue to add. ID is not the same as issue number
   */
  sub_issue_id: number;
  /**
   * When true, replaces the sub-issue's current parent issue. Use with 'add' method only.
   */
  replace_parent?: boolean;
  [k: string]: unknown;
}

/** Add a sub-issue to a parent issue in a GitHub repository. */
export async function subIssueWrite(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "sub_issue_write", params);
}

// --- update_pull_request ---
export interface Input {
  /**
   * New base branch name
   */
  base?: string;
  /**
   * New description
   */
  body?: string;
  /**
   * Repository name
   */
  repo: string;
  /**
   * Mark pull request as draft (true) or ready for review (false)
   */
  draft?: boolean;
  /**
   * Repository owner
   */
  owner: string;
  /**
   * New state
   */
  state?: "open" | "closed";
  /**
   * New title
   */
  title?: string;
  /**
   * GitHub usernames to request reviews from
   */
  reviewers?: string[];
  /**
   * Pull request number to update
   */
  pullNumber: number;
  /**
   * Allow maintainer edits
   */
  maintainer_can_modify?: boolean;
  [k: string]: unknown;
}

/** Update an existing pull request in a GitHub repository. */
export async function updatePullRequest(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "update_pull_request", params);
}

// --- update_pull_request_branch ---
export interface Input {
  /**
   * Repository name
   */
  repo: string;
  /**
   * Repository owner
   */
  owner: string;
  /**
   * Pull request number
   */
  pullNumber: number;
  /**
   * The expected SHA of the pull request's HEAD ref
   */
  expectedHeadSha?: string;
  [k: string]: unknown;
}

/** Update the branch of a pull request with the latest changes from the base branch. */
export async function updatePullRequestBranch(params: Input): Promise<CallToolResult> {
  return await callFunction("github-dd4c984c-f8a1-4aaa-bd3a-429b796179c2", "update_pull_request_branch", params);
}