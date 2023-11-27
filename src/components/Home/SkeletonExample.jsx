import {
  SkeletonPage,
  Layout,
  SkeletonBodyText,
  TextContainer,
  SkeletonDisplayText,
  Card,
  LegacyCard,
} from "@shopify/polaris";
import React from "react";
import "../../index.css";

function SkeletonExample() {
  return (
    <SkeletonPage primaryAction fullWidth>
      <Layout>
        <Layout.Section variant="oneThird">
          <LegacyCard>
            <LegacyCard.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={2} />
              </TextContainer>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={3} />
              </TextContainer>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={3} />
              </TextContainer>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={3} />
              </TextContainer>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={3} />
              </TextContainer>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={3} />
              </TextContainer>
            </LegacyCard.Section>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section>
          <LegacyCard sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText lines={16} />
            </TextContainer>
          </LegacyCard>
          <LegacyCard sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText lines={10} />
            </TextContainer>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );
}
export default SkeletonExample;
