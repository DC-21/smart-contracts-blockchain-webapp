// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Crowd {
    constructor() {
        struct Campaign {
            address owner;
            string title;
            string description;
            uint256 target;
            uint256 deadline;
            uint256 amountCollected;
            string image;
            address[] donators;
            uint256[] donations;
        }

        mapping(uint256 => Campaign) public Campaigns;

        uint256 public numberOfCampaigns = 0;

        function createCampaign(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline, string memory _image) public returns (uint256) {
            Campaign storage campaign = campaigns[numberOfCampaigns];

            require(campaign.deadline < block.timestamp, "The deadline should be date in the future.");

            campaign.owner = owner;
            campaign.title = title;
            campaign.description = description;
            campaign.target = target;
            campaign.deadline = deadline;
            campaign.amountCollected = 0;
            campaign.image = _image;

            numberOfCampaigns++;

            return numberOfCampaigns - 1;
        }

        function donateToVideo(uint256 _id) public payable {
            uint256 amount = msg.value;

            campaign storage campaign = campaigns[_id];

            campaign.donators.push(msg.sender);
            campaign.donators.push(amount);

            (bool sent) = payable(campaign.owner).call{value: amount}("")
        }

        function getDonators() {}

        function getCampaigns() {}
    }
}