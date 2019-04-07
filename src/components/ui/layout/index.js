import React from 'react'

export const Container = ({ children }) => (
  <div className="container mx-auto">{children}</div>
)

export const Page = ({ children }) => <div className="pt-6">{children}</div>

export const Title = ({ children }) => <h1 className="mb-4">{children}</h1>
