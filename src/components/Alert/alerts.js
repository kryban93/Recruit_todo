const alerts = {
  success: [
    { code: 0, description: 'Task finished successfully' },
    { code: 1, description: 'Title changed successfully' },
    { code: 2, description: 'Task removed successfully' },
  ],
  error: [
    { code: 0, description: 'Cannot fetch task list' },
    { code: 1, description: 'Cannot finish task' },
    { code: 2, description: 'Cannot change Title' },
    { code: 3, description: 'Cannot remove task' },
  ],
};

export default alerts;
