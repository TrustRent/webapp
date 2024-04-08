import { Program, AnchorProvider, web3 } from "@project-serum/anchor";
import idl from "../trust_rent.json";
import { useAgreementContext } from "../AgreementContext";
import { useWallet } from "@solana/wallet-adapter-react";

// TODO: Change name to something more fitting
export const useCreateAgreement = () => {
  const { agreementData } = useAgreementContext();
  const wallet = useWallet();

  const createAgreement = async () => {
    if (!wallet.connected || !agreementData) {
      console.error("Wallet not connected or no agreement data");
      return;
    }
    const {
      startDate,
      endDate,
      tenantPubKey,
      monthlyPrice,
      dueDate,
      lateFee,
      sdAmount,
    } = agreementData;
    const connection = new anchor.web3.Connection("Http://localhost:8899");

    const provider = new AnchorProvider(
      connection,
      wallet,
      AnchorProvider.defaultOptions()
    );
    const programId = new web3.PublicKey(idl.metadata.address);

    const program = new Program() < TrustRent > (idl, programId, provider);
    const mintPubkey = new PublicKey(
      "uSDCARvy87Kei3izvHJS3gzecBncTnAeEc2L4qhrJ7o"
    );
    const seeds = [
      Buffer.from("rental_agreement"),
      landlordPublicKey.toBuffer(),
      tenantPubkey.toBuffer(),
    ];
    const [pdaPubkey, bumps] = PublicKey.findProgramAddressSync(
      seeds,
      program.programId
    );
    const collectionAccountAddress = await getAssociatedTokenAddress(
      mintPubkey,
      pdaPubkey,
      true,
      TOKEN_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID
    );

    try {
      const tx = await program.methods
        .createRentAgreement(
          new anchor.BN(monthlyPrice),
          new anchor.BN(sdAmount),
          new anchor.BN(startDate),
          new anchor.BN(endDate)
        )
        .accounts({
          rentalAgreement: pdaPubkey,
          collectionAccount: collectionAccountAddress,
          landlord: wallet.publicKey,
          usdcMint: mintPubkey,
          tenant: tenantPubKey,
          tokenProgram: anchor.TOKEN_PROGRAM_ID,
          associatedTokenProgram: anchor.ASSOCIATED_TOKEN_PROGRAM_ID,
          systemProgram: anchor.web3.SystemProgram.programId,
          rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        })
        .rpc();
    } catch (error) {
      console.error("Error creating agreement", error);
    }
  };
};
