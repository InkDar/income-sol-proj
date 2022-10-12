export const helpers = {
  required: (value: any) => {
    return !!value || 'This field is required.';
  },

  minChars: (length: number) => {
    return (value: any) => (value && value.length >= length) || `Please enter at least ${length} characters.`;
  },

  email: (value: any) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || 'Please enter a valid email address.';
  },
};
