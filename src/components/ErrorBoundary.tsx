import React, { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '40px', 
          textAlign: 'center', 
          fontFamily: 'serif',
          backgroundColor: '#F6F2EC',
          color: '#7A1A21',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Something went wrong.</h1>
          <p style={{ maxWidth: '600px', lineHeight: '1.6' }}>
            The application encountered an error. This might be due to a hosting configuration issue or a script conflict.
          </p>
          <pre style={{ 
            marginTop: '20px', 
            padding: '20px', 
            backgroundColor: 'rgba(0,0,0,0.05)', 
            borderRadius: '8px',
            textAlign: 'left',
            fontSize: '0.8rem',
            overflowX: 'auto',
            maxWidth: '90vw'
          }}>
            {this.state.error?.toString()}
          </pre>
          <button 
            onClick={() => window.location.reload()}
            style={{
              marginTop: '30px',
              padding: '12px 24px',
              backgroundColor: '#7A1A21',
              color: '#F6F2EC',
              border: 'none',
              borderRadius: '24px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return (this as any).props.children;
  }
}

export default ErrorBoundary;
