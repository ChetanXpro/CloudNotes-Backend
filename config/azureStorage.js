import azure from "@azure/storage-blob";

const AZURE_STORAGE_CONNECTION_STRING =
  "DefaultEndpointsProtocol=https;AccountName=duweb;AccountKey=FjZ7pgPO2I++3Dt073wLbSTiQBgp2Y+qy9nqCVE9yNWL+FV/LV7oiaxoc5AjlRnFmoG0uC5LMOnv+ASthD7krw==;EndpointSuffix=core.windows.net";

if (!AZURE_STORAGE_CONNECTION_STRING) {
  throw Error("Azure Storage Connection string not found");
}

// Create the BlobServiceClient object with connection string
const blobServiceClient = azure.BlobServiceClient.fromConnectionString(
  AZURE_STORAGE_CONNECTION_STRING
);

const containerClient = blobServiceClient.getContainerClient("pdf");
export default containerClient;
