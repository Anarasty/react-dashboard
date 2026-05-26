import { VENDOR_MONITORED } from '@/constants';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';

const chartConfig = {
  monitored: {
    label: 'Total monitored',
    color: 'var(--chart-4)',
  },
  limit: {
    label: 'Available limit',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig;

export const AppRadialChart2 = () => {
  const totalLimits = VENDOR_MONITORED[0].monitored + VENDOR_MONITORED[0].limit;

  return (
    <ChartContainer
      config={chartConfig}
      className='w-[170px] h-[100p]'
    >
      <RadialBarChart
        data={VENDOR_MONITORED}
        //! Original properties
        // innerRadius={90}
        // outerRadius={140}
        // cy={104}
        // startAngle={0}
        // endAngle={180}
        //? My properties
        innerRadius={65}
        outerRadius={85}
        cy={90}
        startAngle={0}
        endAngle={180}
      >
        <RadialBar
          dataKey='limit'
          stackId='a'
          fill='var(--color-limit)'
          cornerRadius={20}
          className='stroke-transparent stroke-2'
        />
        <RadialBar
          dataKey='monitored'
          stackId='a'
          fill='var(--color-monitored)'
          cornerRadius={20}
          className='stroke-transparent stroke-2'
        />
        <PolarRadiusAxis
          tick={false}
          tickLine={false}
          axisLine={false}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor='middle'
                  >
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 16}
                      className='fill-foreground text-2xl font-bold'
                    >
                      {totalLimits.toLocaleString()}
                    </tspan>
                  </text>
                );
              }
            }}
          ></Label>
        </PolarRadiusAxis>

        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent />}
        />
      </RadialBarChart>
    </ChartContainer>
  );
};
