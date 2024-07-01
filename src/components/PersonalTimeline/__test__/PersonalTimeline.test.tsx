import React from 'react';
import { render } from '@testing-library/react';
import { mockData } from './mocks';
import {PersonalTimelineProps, PersonalTimeline} from '../PersonalTimeline';

describe('PersonalTimeline component', () => {

  it('renders without crashing', () => {
    const props: PersonalTimelineProps = {
      data: mockData,
    };
    render(<PersonalTimeline {...props} />);
  });

  it('renders title correctly', () => {
    const props: PersonalTimelineProps = {
      data: mockData,
    };
    const { getByText } = render(<PersonalTimeline {...props} />);
    expect(getByText(mockData.title)).toBeInTheDocument();
  });

  it('passes events and position to PersonalTimelineEvents', () => {
    const props: PersonalTimelineProps = {
      data: mockData,
    };
    const { getByTestId } = render(<PersonalTimeline {...props} />);
    
    const personalTimelineEvents = getByTestId('personal-timeline-events');
    expect(personalTimelineEvents).toBeInTheDocument();
    expect(personalTimelineEvents).toHaveAttribute('position', mockData.position);
    
    const event1Title = getByTestId('timeline-event-title-1');
    expect(event1Title).toBeInTheDocument();
    expect(event1Title.textContent).toEqual(mockData.events[0].title);
    
    const event2Title = getByTestId('timeline-event-title-2');
    expect(event2Title).toBeInTheDocument();
    expect(event2Title.textContent).toEqual(mockData.events[1].title);
  });
});
