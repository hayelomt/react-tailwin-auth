import * as React from 'react';

export type ValidationError = {
  errors: Record<string, string>;
};

export type ReactChildren = {
  children: React.ReactNode;
};
