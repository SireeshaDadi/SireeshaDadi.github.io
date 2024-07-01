import React from 'react';
import { render } from '@testing-library/react';
import { mockEvents } from './mocks';
import { PersonalTimelineEventsProps, PersonalTimelineEvents } from '../PersonalTimelineEvents';


describe('PersonalTimelineEvents component', () => {
 

  it('renders without crashing', () => {
    const props: PersonalTimelineEventsProps = {
      events: mockEvents,
    };
    render(<PersonalTimelineEvents {...props} />);
  });

  it('renders events correctly', () => {
    const props: PersonalTimelineEventsProps = {
      events: mockEvents,
    };
    const { getByText } = render(<PersonalTimelineEvents {...props} />);

    mockEvents.forEach((event) => {
      expect(getByText(event.date)).toBeInTheDocument();
      expect(getByText(event.title)).toBeInTheDocument();
      expect(getByText(event.location)).toBeInTheDocument();
      expect(getByText(event.icon as string)).toBeInTheDocument();
    });
  });

  it('renders latest event with primary color dot', () => {
    const props: PersonalTimelineEventsProps = {
      events: mockEvents,
    };
    const { getByTestId } = render(<PersonalTimelineEvents {...props} />);

    const latestEventDot = getByTestId('timeline-dot-1');
    expect(latestEventDot).toHaveClass('MuiTimelineDot-primary');
  });
});
