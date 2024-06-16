import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
interface CardWrapper{
children: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

const CardWrapper = ({ children ,title,description,footer,className}:CardWrapper) => {
  return (
    <Card className={className}>
        <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>
                  {description}
              </CardDescription>
          </CardHeader>
      <CardContent>
        {children}
          </CardContent>
          <CardFooter>
            {footer}
          </CardFooter>
    </Card>
  );
}

export default CardWrapper