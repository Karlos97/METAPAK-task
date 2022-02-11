import { render, screen } from '@testing-library/react';
import Notification from '../../components/UI/Notification/Notification';

describe('Notification component', () => {
  test('renders succes notification', () => {
    const expectedTextStatus = 'succes';
    const expectedTextMessage = 'succes message';
    const expectedTextTitle = 'succes title';
    // Arrange
    render(
      <Notification
        status={expectedTextStatus}
        message={expectedTextMessage}
        title={expectedTextTitle}
      />
    );

    // Act
    // ... nothing

    // Assert
    const notificationMessageElement = screen.getByText(expectedTextMessage, {
      exact: true,
    });
    const notificationTitleElement = screen.getByText(expectedTextTitle, {
      exact: true,
    });
    expect(notificationMessageElement && notificationTitleElement).toBeTruthy();
  });

  test('renders error notification', () => {
    const expectedTextStatus = 'error';
    const expectedTextMessage = 'error message';
    const expectedTextTitle = 'error title';
    // Arrange
    render(
      <Notification
        status={expectedTextStatus}
        message={expectedTextMessage}
        title={expectedTextTitle}
      />
    );

    // Act
    // ... nothing

    // Assert
    const notificationMessageElement = screen.getByText(expectedTextMessage, {
      exact: true,
    });
    const notificationTitleElement = screen.getByText(expectedTextTitle, {
      exact: true,
    });
    expect(notificationMessageElement && notificationTitleElement).toBeTruthy();
  });
});
