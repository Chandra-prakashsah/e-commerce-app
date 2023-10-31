const fields = [
    {
      key: 'name',
      label: 'Name',
      validation: (value: string) => (!value ? 'Name is required' : undefined),
    },
    {
      key: 'email',
      label: 'Email',
      validation: (value: string) =>
        !value ? 'Email is required' : !/\S+@\S+\.\S+/.test(value) ? 'Invalid email format' : undefined,
    },
  ];