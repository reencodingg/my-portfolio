'use client';

import { Flex, Text } from "@/once-ui/components";

export default function SkillItem({ icon, name, level }) {
  const shouldInvert = icon && !['/images/skills/illustrator.svg', '/images/skills/word.svg', '/images/skills/excel.svg'].includes(icon);

  return (
    <Flex 
      border="neutral-medium" 
      radius="m" 
      padding="12" 
      gap="8" 
      vertical="center" 
      background="neutral-alpha-weak"
      style={{
        transition: 'all 0.2s ease-in-out',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.background = 'var(--neutral-alpha-medium)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.background = 'var(--neutral-alpha-weak)';
      }}
    >
      {icon && <img src={icon} alt={name} width="24" height="24" style={shouldInvert ? { filter: 'brightness(0) invert(1)' } : {}} />}
      <Text variant="body-strong-m">{name}</Text>
      {level && <Text variant="body-default-s" onBackground="neutral-weak">({level})</Text>}
    </Flex>
  );
} 